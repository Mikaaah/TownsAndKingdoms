# Java Installation
**You need Java 21 to host 1.20.1 modpacks.**

# Download the Serverpack
1. Navigate to the Curseforge page for the version you wish to play.
2. Go to the **Files** tab and click the latest file.
3. Navigate to **Additional Files** and download the serverpack files.

# Running Your Server

**Before anything, make sure you've extracted the initial serverpack file you downloaded!**

## Windows
1. If you see a `startserver.bat` file in the serverpack, double-click it to run your server.

## macOS
1. Open the **Terminal** app (found in `/Applications/Utilities/`).
2. Type `cd <path_to_installer>` and press Enter to navigate to the installation folder.
   - Replace `<path_to_installer>` with the actual path.
   - If you don't know the path, type `cd ` (with a space) and drag the installer folder into the Terminal.
3. Run the following commands:
   - `chmod +x ./startserver.sh` (this makes the script executable).
   - `./startserver.sh` (to run the installation script).

## Linux
1. Ensure `curl` is installed (if using Ubuntu, you may need to install `wget` to get `curl`).
2. Navigate to the modpack directory and make the script executable:
   - `chmod +x startserver.sh`
3. Start the modpack with:
   - `./startserver.sh`

# Common Questions

## How do I join my server?
1. Install the modpack using a modded launcher (e.g., Curseforge, ATLauncher).
2. Go to the **Multiplayer** tab in Minecraft.
3. Click **Direct Connect** and type `localhost`.

## How do others join my server?
1. They will connect using your Public IP Address. Find it by typing "my ip address" in Google.
   - If they can't join, look up a port forwarding guide online.

## How do I allocate more RAM?
1. Open the `user_jvm_args.txt` file.
2. Cahge the Java arguments within the quotation marks. For example, `-Xmx8g` will set maximum RAM usage to 8GB.

## Should I be worried about errors in the console?
- Unless something isn't working as expected, most errors (99%) mean nothing important.

## Why is my server so laggy?
1. Follow this guide for optimal Java arguments (note: these can cause instability for some users).
2. If lag persists, use this in-game command: `/spark profiler start --only-ticks-over 50`.
3. Check the **Spark Profiler** link in chat/console and verify if your server is using all available memory.
4. You can allocate more memory or check resource usage in the Spark Profiler. Ask for help in the Discord if needed.

## How do I make my server public?
1. To get your server listed in the **Server Browser**, click the **Add Server** button in the Multiplayer menu.
   - Servers hosted with Bisect get higher placement on the server list.
   - Make sure to post under the correct modpack.

# Alternative to Self Hosting
If you'd prefer a hosted solution, consider using Bisect for server hosting:

1. Prices range from $10 to $25 per month (depending on the plan).
2. Use code **Mika** for 25% off.

We suggest choosing at least 1GB per player (minimum 4GB for server stability).

You can order a plan [here](bisecthosting.com/Mika).
