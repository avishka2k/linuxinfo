from flask import Flask, jsonify, render_template
import subprocess

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/system-info', methods=['GET'])
def get_system_info():
    try:
        # Use subprocess to execute a shell command and capture its output
        result = subprocess.run(['uname', '-a'], stdout=subprocess.PIPE, text=True)
        system_info = result.stdout.strip()

        # You can gather more information here based on your requirements

        return jsonify({"system_info": system_info})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050)
