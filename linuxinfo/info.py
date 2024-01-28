import os
import platform
from flask import jsonify
from utils import get_subprocess

def get_system_info():
    info = {
        "system": platform.system(),
        "os_name": get_subprocess("grep PRETTY_NAME /etc/os-release | awk -F= '{print $2}' | tr -d '\"'"),
        "node": platform.node(),
        "release": platform.release(),
        "version": platform.version(),
        "machine": platform.machine(),
        "user": get_subprocess("whoami"),
        "disk_info": {
            "total": get_subprocess("df -h / | awk 'NR==2{print $2}'"),
            "available": get_subprocess("df -h / | awk 'NR==2{print $4}'"),
        },
        "memory_info": {
            "total": round(os.sysconf('SC_PAGE_SIZE') * os.sysconf('SC_PHYS_PAGES') / (1024. ** 3), 2),
            "available": round(os.sysconf('SC_PAGE_SIZE') * os.sysconf('SC_AVPHYS_PAGES') / (1024. ** 3), 2)
        },
        "machine_info": {
            "model": get_subprocess("sudo dmidecode -t system | awk -F: '/Product Name/{print $2}'"),
            "machine_id": get_subprocess("cat /etc/machine-id")
        },
        "cpu": {
            "architecture:": get_subprocess("lscpu | grep 'Architecture:' | awk '{print $2}'"),
            "cpu_op_mode": get_subprocess("lscpu | grep 'CPU op-mode(s)' | awk -F: '{print $2}' | sed 's/^[ \t]*//'"),
            "count": os.cpu_count(),
            "socket": get_subprocess("lscpu | grep '^Socket(s):' | awk '{print $2}'"),
            "model_name": get_subprocess("lscpu | grep 'Model name' | awk -F: '{print $2}' | sed 's/^[ \t]*//'"),
            "mhz": get_subprocess("lscpu | grep 'CPU MHz' | awk -F: '{print $2}' | sed 's/^[ \t]*//'"),
        }
    }
    return jsonify(info)