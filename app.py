from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    # Holen der Daten aus dem Formular
    user_input = request.form['user_input']

    # Hier kannst du die Logik für die Antwort implementieren
    # Beispiel: Wir geben die Länge des Eingabestrings als Antwort zurück
    response = f"Die Eingabe hat {len(user_input)} Zeichen."

    # Rückgabe der Antwort an die Benutzeroberfläche
    return response

if __name__ == '__main__':
    app.run(debug=True)
