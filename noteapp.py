import flask
app = flask.Flask("noteapp")

def get_html(page_name):
    html_file = open(page_name + ".html")
    content = html_file.read()
    html_file.close()
    return content

def add_note():
    notesdb = open("notes.txt","a")
    new_note = flask.request.args.get("n") 
    new_note_line = new_note + "\n"
    notesdb.write(new_note_line)
    notesdb.close()

def show_notes():
    notesdb = open("notes.txt")
    content = notesdb.read()
    notesdb.close()
    notes = content.split("\n")
    notes.pop(len(notes) - 1)
    return notes


@app.route("/")
def homepage():
    return get_html("index")

@app.route("/notes") 
def notes_page():
    html_page = get_html("notes")
    notes = show_notes()
    actual_values = ""
    for note in notes:
        actual_values += "<p>" + note + "</p>"
    return html_page.replace("$$NOTES$$", actual_values)

@app.route("/search")
def search():
    html_page = get_html("notes")
    query = flask.request.args.get("q")
    notes = show_notes()
    result = ""
    for note in notes:
        if note.lower().find(query.lower()) != -1:
            result += "<p>" + note + "<p>"
        else:
            result = "<p>No result found</p>"
    return html_page.replace("$$NOTES$$", result)

@app.route("/add")
def add():
    add_note()
    return get_html("index")


