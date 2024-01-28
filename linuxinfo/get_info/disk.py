from linuxinfo import app
from app import get_system_info


cat  = ['df', '-h', '|', 'awk "NR==2{print $2}"']

@app.route('/api/disk/space', methods=['GET'])
def inf():
    return get_system_info(cat)