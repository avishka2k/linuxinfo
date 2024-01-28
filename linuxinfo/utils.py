import subprocess


def get_subprocess(cmd):
    try:
        result = subprocess.check_output(cmd, shell=True, text=True)
        system_info = result.strip()
        return system_info
    except Exception as e:
        return f'error: {e}'