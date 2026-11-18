// priority: 0
// TNK3 | CapeJS presentation for the server-owned cape catalogue.

// capes
let TNK_CAPE_CLIENT = {active: {}, ready: false, warned: false};
TNK_CAPE_CLIENT.load = () => {
    let data = JSON.parse(String(JsonIO.readString('kubejs/config/tnk_capes.json')));
    let rows = {};
    data.capes.forEach(row => {
        if (/^[a-z0-9_]+$/.test(row.id) && /^tnk\/[a-z0-9_/-]+$/.test(row.texture)) rows[row.id] = row;
    });
    return rows;
};
if (Platform.isLoaded('capejs') && Platform.isLoaded('tnkcore')) {
    NetworkEvents.dataReceived('tnk:capes', event => {
        if (!TNK_CAPE_CLIENT.checked) {
            TNK_CAPE_CLIENT.checked = true;
            TNK_CAPE_CLIENT.bridge = Java.tryLoadClass('nl.townsandkingdoms.core.compat.cape.CapeJSCompat');
            if (TNK_CAPE_CLIENT.bridge) TNK_CAPE_CLIENT.catalogue = TNK_CAPE_CLIENT.load();
            else console.info('[TNK Capes] Cape rendering disabled: CapeJS 1.1.1 and Workshop 0.11.11 or newer are required on the client.');
        }
        if (!TNK_CAPE_CLIENT.bridge) return;
        try {
            let snapshot = JSON.parse(String(event.data.getString('json')));
            if (snapshot.schema !== 1 || !snapshot.active) return;
            let next = {};
            Object.keys(snapshot.active).forEach(uuid => {
                let id = snapshot.active[uuid];
                if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(uuid)) return;
                if (Object.prototype.hasOwnProperty.call(TNK_CAPE_CLIENT.catalogue, id)) next[uuid] = id;
            });
            Object.keys(TNK_CAPE_CLIENT.active).forEach(uuid => {
                if (!next[uuid]) TNK_CAPE_CLIENT.bridge.restoreCape(uuid);
            });
            Object.keys(next).forEach(uuid => {
                if (TNK_CAPE_CLIENT.active[uuid] !== next[uuid]) {
                    TNK_CAPE_CLIENT.bridge.setCape(uuid, TNK_CAPE_CLIENT.catalogue[next[uuid]].texture);
                }
            });
            TNK_CAPE_CLIENT.active = next;
            TNK_CAPE_CLIENT.ready = true;
        } catch (error) {
            if (!TNK_CAPE_CLIENT.warned) console.error('[TNK Capes] Cannot update CapeJS: ' + error);
            TNK_CAPE_CLIENT.warned = true;
        }
    });
    ClientEvents.loggedIn(event => {
        if (!TNK_CAPE_CLIENT.checked) {
            TNK_CAPE_CLIENT.checked = true;
            TNK_CAPE_CLIENT.bridge = Java.tryLoadClass('nl.townsandkingdoms.core.compat.cape.CapeJSCompat');
            if (TNK_CAPE_CLIENT.bridge) TNK_CAPE_CLIENT.catalogue = TNK_CAPE_CLIENT.load();
            else console.info('[TNK Capes] Cape rendering disabled: CapeJS 1.1.1 and Workshop 0.11.11 or newer are required on the client.');
        }
        if (!TNK_CAPE_CLIENT.bridge) return;
        TNK_CAPE_CLIENT.bridge.restoreAll();
        TNK_CAPE_CLIENT.active = {};
        TNK_CAPE_CLIENT.ready = false;
        TNK_CAPE_CLIENT.warned = false;
        // A request only reads the server state. No client-supplied cape is accepted.
        event.player.sendData('tnk:capes_request', {});
    });
    ClientEvents.loggedOut(event => {
        if (!TNK_CAPE_CLIENT.bridge) return;
        TNK_CAPE_CLIENT.bridge.restoreAll();
        TNK_CAPE_CLIENT.active = {};
        TNK_CAPE_CLIENT.ready = false;
    });
} else {
    console.info('[TNK Capes] Cape rendering disabled: CapeJS 1.1.1 and Workshop 0.11.11 or newer are required on the client.');
}
