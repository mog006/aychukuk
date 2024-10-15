import smtplib
from email.mime.text import MIMEText

from flask_bootstrap import Bootstrap5
from flask import Flask, render_template, request, jsonify
from datetime import datetime

year = datetime.now().year

app = Flask(__name__)
app.secret_key = 'g!XeJeIY^s2LFeFsLL6>BsUVLSW6Qe'
app.config['BOOTSTRAP_BOOTSWATCH_THEME'] = 'lux'
bootstrap = Bootstrap5(app)


def send_email(name, email, message):
    sender_email = "aychukukiletisim@gmail.com"
    recipient_email = "aychukukdanismanlik@gmail.com"
    app_password = "thme wacc bstp nfbx"

    subject = f"Yeni Başvuru Formu: {name}"
    body = f"Ad Soyad: {name}\nEmail: {email}\nMesaj: {message}"

    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = sender_email
    msg['To'] = recipient_email

    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login(sender_email, app_password)
        server.sendmail(sender_email, recipient_email, msg.as_string())


@app.route('/', methods=['GET', 'POST'])
def anasayfa():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        send_email(name, email, message)

        return jsonify({'status': 'success'})
    return render_template('index.html', year=year)


if __name__ == '__main__':
    app.run(debug=True)
