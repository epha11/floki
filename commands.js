const commands = {
    echo: (args) => args.join(' '),
    cd: (args) => {
        if (args.length === 0) return "The directory name is invalid.";
        return `Changed directory to ${args.join(' ')}`;
    },
    cls: () => {
        outputElement.innerHTML = '';
        return '';
    },
    dir: () => {
        return [
            " Volume in drive C has no label.",
            " Volume Serial Number is 1234-5678",
            "",
            " Directory of C:\\Users\\isv61",
            "",
            "01/16/2025  08:00 AM    <DIR>          .",
            "01/16/2025  08:00 AM    <DIR>          ..",
            "01/16/2025  08:00 AM             1,234 example.txt",
            "01/16/2025  08:00 AM             5,678 anotherfile.doc",
            "               2 File(s)          6,912 bytes",
            "               2 Dir(s)  100,000,000,000 bytes free"
        ].join('\n');
    },
    help: () => {
        return [
            "Supported commands:",
            "  echo [text]       - Displays text on the screen.",
            "  cd [directory]    - Changes the current directory.",
            "  cls               - Clears the screen.",
            "  dir               - Lists the directory contents.",
            "  help              - Displays this help message.",
            "  date              - Displays or sets the system date.",
            "  time              - Displays or sets the system time.",
            "  mkdir [dir]       - Creates a new directory.",
            "  del [file]        - Deletes a file.",
            "  copy [src] [dst]  - Copies a file from source to destination.",
            "  move [src] [dst]  - Moves a file from source to destination.",
            "  rename [old] [new] - Renames a file.",
            "  type [file]       - Displays the contents of a file.",
            "  tasklist          - Lists currently running processes.",
            "  taskkill [pid]    - Terminates a process by PID.",
            "  systeminfo        - Displays system information.",
            "  ping [host]       - Pings a network host.",
            "  ipconfig          - Displays network configuration.",
            "  set               - Displays or sets environment variables.",
            "  pause             - Pauses the command line until a key is pressed.",
            "  cls               - Clears the screen.",
            "  ver               - Displays the Windows version.",
            "  shutdown          - Shuts down the system.",
            "  exit              - Exits the terminal.",
            "  tree              - Displays a graphical directory tree.",
            "  copy con [file]   - Creates or appends a file from input.",
            "  chkdsk            - Checks the disk for errors.",
            "  format [drive]    - Formats a drive.",
            "  fc [file1] [file2] - Compares two files and displays differences.",
            "  attrib            - Displays or changes file attributes.",
            "  touch [file]      - Creates an empty file or updates timestamp.",
            "  clearenv          - Clears all environment variables.",
            "  hostname          - Displays or sets the hostname.",
            "  netstat           - Displays network connections.",
            "  nslookup [host]   - Queries DNS for information about a host.",
            "  curl [url]        - Fetches content from a URL.",
            "  wget [url]        - Downloads content from a URL.",
            "  sudo [command]    - Executes a command with superuser privileges.",
            "  setenv [var] [val] - Sets an environment variable.",
            "  getenv [var]      - Displays an environment variable value.",
            "  clearcache        - Clears the browser or system cache.",
            "  grep [pattern] [file] - Searches for a pattern in a file.",
            "  history           - Displays the command history.",
            "  man [command]     - Displays the manual for a command.",
            "  sudo shutdown     - Shuts down the system with root privileges.",
            "  shutdown /r       - Restarts the system.",
            "  taskmgr           - Opens the Task Manager."
        ].join('\n');
    },
    date: () => {
        return new Date().toLocaleDateString();
    },
    time: () => {
        return new Date().toLocaleTimeString();
    },
    mkdir: (args) => {
        if (args.length === 0) return "The system cannot find the path specified.";
        return `Directory created: ${args.join(' ')}`;
    },
    del: (args) => {
        if (args.length === 0) return "The system cannot find the file specified.";
        return `File deleted: ${args.join(' ')}`;
    },
    copy: (args) => {
        if (args.length < 2) return "The syntax of the command is incorrect.";
        return `File copied from ${args[0]} to ${args[1]}`;
    },
    move: (args) => {
        if (args.length < 2) return "The syntax of the command is incorrect.";
        return `File moved from ${args[0]} to ${args[1]}`;
    },
    rename: (args) => {
        if (args.length < 2) return "The syntax of the command is incorrect.";
        return `File renamed from ${args[0]} to ${args[1]}`;
    },
    type: (args) => {
        if (args.length === 0) return "The system cannot find the file specified.";
        return `Contents of ${args[0]}: \nThis is a mock file content.`;
    },
    tasklist: () => {
        return [
            "Task List:",
            "  PID    Name                    Status",
            "  1234   Notepad.exe             Running",
            "  5678   chrome.exe              Running",
            "  9101   explorer.exe            Running"
        ].join('\n');
    },
    taskkill: (args) => {
        if (args.length === 0) return "No process ID specified.";
        return `Process with PID ${args[0]} terminated.`;
    },
    systeminfo: () => {
        return [
            "System Information:",
            "  OS: Windows 10",
            "  Version: 10.0.22000",
            "  RAM: 16GB",
            "  CPU: Intel Core i7",
            "  Disk: 1TB SSD"
        ].join('\n');
    },
    ping: (args) => {
        if (args.length === 0) return "Ping: No host specified.";
        return `Pinging ${args[0]} with 32 bytes of data:\nReply from ${args[0]}: bytes=32 time=12ms TTL=64`;
    },
    ipconfig: () => {
        return [
            "Windows IP Configuration",
            "",
            "Ethernet adapter Ethernet:",
            "   Connection-specific DNS Suffix  . : home",
            "   IPv4 Address. . . . . . . . . . . : 192.168.1.101",
            "   Subnet Mask . . . . . . . . . . . : 255.255.255.0",
            "   Default Gateway . . . . . . . . . : 192.168.1.1",
            "",
            "Wireless LAN adapter Wi-Fi:",
            "   Connection-specific DNS Suffix  . : home",
            "   IPv4 Address. . . . . . . . . . . : 192.168.1.102",
            "   Subnet Mask . . . . . . . . . . . : 255.255.255.0",
            "   Default Gateway . . . . . . . . . : 192.168.1.1",
            "",
            "Tunnel adapter Teredo Tunneling Pseudo-Interface:",
            "   Connection-specific DNS Suffix  . : ",
            "   IPv6 Address. . . . . . . . . . . : 2001:0db8:85a3::8a2e:370:7334",
            "   Link-local IPv6 Address . . . . . : fe80::1%13",
            "   Default Gateway . . . . . . . . . : ::"
        ].join('\n');
    },
    set: (args) => {
        if (args.length === 0) return "Environment variables: PATH=...";
        return `Set environment variable: ${args.join(' ')}`;
    },
    pause: () => {
        return "Press any key to continue . . .";
    },
    ver: () => {
        return "Windows 10 Version 10.0.22000";
    },
    shutdown: () => {
        return "The system is shutting down...";
    },
    exit: () => {
        return "Exiting terminal...";
    },

    tree: () => {
        return [
            "Device:",
            "A:\\",
            "├── System",
            "│   ├── Core",
            "│   │   ├── Boot",
            "│   │   ├── Execution",
            "│   │   ├── Hooks",
            "│   │   ├── Logs",
            "│   │   │   ├── BootLogs",
            "│   │   │   ├── ExecutionLogs",
            "│   │   │   └── DebugLogs",
            "│   ├── Drivers",
            "│   │   ├── GPU",
            "│   │   │   ├── Intel",
            "│   │   │   │   ├── Drivers",
            "│   │   │   │   ├── Firmware",
            "│   │   │   ├── NVIDIA",
            "│   │   │   │   ├── Drivers",
            "│   │   │   │   └── Firmware",
            "│   │   ├── Audio",
            "│   │   │   ├── Realtek",
            "│   │   │   │   ├── Drivers",
            "│   │   │   │   └── Firmware",
            "│   │   │   └── ASUS",
            "│   │   │       ├── Drivers",
            "│   │   │       └── Firmware",
            "│   │   ├── Networking",
            "│   │   │   ├── Wi-Fi",
            "│   │   │   │   ├── Drivers",
            "│   │   │   │   ├── Firmware",
            "│   │   │   └── Ethernet",
            "│   │   │       ├── Drivers",
            "│   │   │       └── Firmware",
            "│   │   ├── VirtualDevices",
            "│   ├── Kernel",
            "│   │   ├── Memory",
            "│   │   ├── Interrupts",
            "│   │   ├── Threads",
            "│   ├── Shell",
            "│   │   ├── Commands",
            "│   │   ├── UI",
            "│   │   ├── Themes",
            "│   ├── Updates",
            "│   │   ├── Patches",
            "│   │   ├── SecurityFixes",
            "│   │   └── Drivers",
            "├── Users",
            "│   ├── floki",
            "│   │   ├── Desktop",
            "│   │   ├── Documents",
            "│   │   │   ├── Work",
            "│   │   │   ├── Personal",
            "│   │   │   ├── Contracts",
            "│   │   ├── Downloads",
            "│   │   │   ├── GitHub",
            "│   │   │   │   ├── Static Pages",
            "│   │   │   │   ├── Frameworks",
            "│   │   │   │   ├── Custom Builds",
            "│   │   │   ├── Torrents",
            "│   │   │   ├── Compressed",
            "│   │   │   ├── ISOs",
            "│   │   ├── Projects",
            "│   │   │   ├── FlokiKernel",
            "│   │   │   │   ├── Source",
            "│   │   │   │   ├── Binaries",
            "│   │   │   │   ├── Dependencies",
            "│   │   │   ├── AI-Models",
            "│   │   │   ├── CustomOS",
            "│   │   │   ├── SecurityScripts",
            "│   │   ├── Code",
            "│   │   │   ├── sSapphire",
            "│   │   │   │   ├── CoreModules",
            "│   │   │   │   ├── VMHandlers",
            "│   │   │   │   ├── Networking",
            "│   │   │   ├── Wither",
            "│   │   │   ├── Mint_Script",
            "│   │   │   ├── SecureScript",
            "│   │   │   ├── Minuteman_Iran(fs-type)",
            "│   │   ├── VMs",
            "│   │   │   ├── Linux_Dev",
            "│   │   │   │   ├── Home",
            "│   │   │   │   ├── RootFS",
            "│   │   │   │   ├── Configs",
            "│   │   │   ├── Unreal_Test",
            "│   │   │   ├── ARM64_Emu",
            "│   │   │   │   ├── Drivers",
            "│   │   │   │   ├── Rendering",
            "│   │   │   │   ├── InputHandling",
            "│   │   ├── Media",
            "│   │   │   ├── Pictures",
            "│   │   │   │   ├── Wallpapers",
            "│   │   │   │   ├── Screenshots",
            "│   │   │   ├── Videos",
            "│   │   │   │   ├── Edits",
            "│   │   │   │   ├── Recordings",
            "│   │   │   │   ├── Renders",
            "│   │   │   ├── Music",
            "│   │   │   │   ├── Playlists",
            "│   │   │   │   ├── Lossless",
            "│   │   │   │   ├── Synthwave",
            "│   │   ├── Configs",
            "│   │   │   ├── UserSettings",
            "│   │   │   ├── Startup",
            "│   │   │   ├── PowerProfiles",
            "│   │   ├── Tools",
            "│   │   │   ├── Benchmarking",
            "│   │   │   ├── StressTests",
            "│   │   │   ├── Monitoring",
            "├── Programs",
            "│   ├── SystemTools",
            "│   ├── Networking",
            "│   ├── Security",
            "│   ├── Development",
            "│   ├── Virtualization",
            "│   ├── Games",
            "│   │   ├── Call_of_Duty",
            "│   │   │   ├── Black_Ops",
            "│   │   │   │   ├── Black_Ops_1",
            "│   │   │   │   ├── Black_Ops_2",
            "│   │   │   │   ├── Black_Ops_6",
            "│   │   │   ├── Modern_Warfare",
            "│   │   │   │   ├── Modern_Warfare_1",
"│   │   │   │   ├── Modern_Warfare_2",
"│   │   │   │   ├── Modern_Warfare_3",
"│   │   │   │   ├── Modern_Warfare_2017",
"│   │   │   │   ├── Modern_Warfare_2019",
"│   │   │   │   ├── Modern_Warfare_2022",
"│   │   │   ├── Ghosts",
"│   │   │   ├── Advanced_Warfare",
"│   │   ├── Arena_Breakout",
"│   │   ├── Infinite",
"│   │   ├── Ready_or_Not",
"│   │   ├── FPV_Drone_Kamikaze",
"│   │   ├── Bakhmut",
"│   │   ├── Conflict_of_Nations_World_War_3",
"│   │   ├── Rise_of_Nations_Gold_Edition",
"│   │   ├── FPS",
"│   │   ├── RPG",
"│   │   ├── Strategy",
"│   │   ├── Emulators",
"│   ├── Programs",
"│   │   ├── SystemTools",
"│   │   ├── Networking",
"│   │   ├── Security",
"│   │   ├── Development",
"│   │   ├── Virtualization",
"│   │   ├── Games",
"│   │   │   ├── FPS",
"│   │   │   ├── RPG",
"│   │   │   ├── Strategy",
"│   │   │   ├── Emulators",
"│   ├── Compilers",
"├── Temp",
"│   ├── CrashDumps",
            "│   ├── Sessions",       
            "│   ├── Logs",
            "├── Network",
            "│   ├── Mounts",
            "│   ├── Shares",
            "│   ├── Connections",
            "│   │   ├── Active",
            "│   │   ├── Saved",
            "│   │   ├── Tunnels",
            "├── Storage",
            "│   ├── Disks",
            "│   │   ├── Primary",
            "│   │   ├── Backup",
            "│   │   ├── External",
            "│   ├── Snapshots",
            "│   │   ├── Daily",
            "│   │   ├── Weekly",
            "│   │   ├── Monthly",
            "│   ├── Encrypted",
            "│   │   ├── Volumes",
            "│   │   ├── Keys",
            "│   │   ├── Backups",
            "│   ├── RAID",
            "│   ├── Removable",
            "│   │   ├── USB",
            "│   │   ├── SDCards",
            "├── SystemData",
            "│   ├── Telemetry",
            "│   ├── Diagnostics",
            "│   ├── UserProfiles",
            "│   ├── Policies",
            "│   ├── Logs",
            "│   ├── CrashReports",
            "│   ├── ErrorLogs",
        ].join('\n');
    },
    

    "copy con": (args) => {
        if (args.length === 0) return "The system cannot find the file specified.";
        return `Enter text to write to ${args[0]} (Ctrl+Z to save):\nText written to ${args[0]}`;
    },
    chkdsk: () => {
        return "Checking disk for errors...\nNo errors found.";
    },
    format: (args) => {
        if (args.length === 0) return "No drive specified.";
        return `Drive ${args[0]} formatted successfully.`;
    },
    fc: (args) => {
        if (args.length < 2) return "The syntax of the command is incorrect.";
        return `Comparing files ${args[0]} and ${args[1]}...\nNo differences found.`;
    },
    attrib: () => {
        return [
            "Attributes of files in C:\\Users\\isv61:",
            "  A  archive.txt",
            "  R  readonly.doc"
        ].join('\n');
    },
    touch: (args) => {
        if (args.length === 0) return "The system cannot find the file specified.";
        return `File ${args[0]} created or timestamp updated.`;
    },
    clearenv: () => {
        return "All environment variables cleared.";
    },
    hostname: (args) => {
        if (args.length === 0) return "Current hostname: mypc";
        return `Hostname set to ${args[0]}`;
    },
    netstat: () => {
        return [
            "Active Connections:",
            "  Proto  Local Address          Foreign Address        State",
            "  TCP    192.168.1.1:80        192.168.1.100:1234     ESTABLISHED",
            "  TCP    192.168.1.1:443       192.168.1.100:5678     TIME_WAIT"
        ].join('\n');
    },
    nslookup: (args) => {
        if (args.length === 0) return "No host specified.";
        return `DNS request for ${args[0]}:\nName: ${args[0]}\nAddresses: 192.168.1.1`;
    },
    curl: (args) => {
        if (args.length === 0) return "No URL specified.";
        return `Fetching content from ${args[0]}...\nContent fetched: <HTML content>`;
    },
    wget: (args) => {
        if (args.length === 0) return "No URL specified.";
        return `Downloading content from ${args[0]}...\nDownload complete.`;
    },
    sudo: (args) => {
        if (args.length === 0) return "No command specified.";
        return `Executing command with superuser privileges: ${args.join(' ')}`;
    },
    setenv: (args) => {
        if (args.length < 2) return "The syntax of the command is incorrect.";
        return `Environment variable ${args[0]} set to ${args[1]}`;
    },
    getenv: (args) => {
        if (args.length === 0) return "No variable specified.";
        return `Value of ${args[0]}: some_value`;
    },
    clearcache: () => {
        return "Cache cleared.";
    },
    grep: (args) => {
        if (args.length < 2) return "The syntax of the command is incorrect.";
        return `Searching for pattern '${args[0]}' in file ${args[1]}... No matches found.`;
    },
    history: () => {
        return [
            "Command history:",
            "  1. cd Documents",
            "  2. echo Hello World",
            "  3. ping google.com"
        ].join('\n');
    },
    man: (args) => {
        if (args.length === 0) return "No command specified.";
        return `Manual for ${args[0]}: Usage of the ${args[0]} command...`;
    }
};
