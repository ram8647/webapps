#!/usr/bin/python2.7

# See https://pythonschool.net/server-side-scripting/preparing-for-your-first-script/
import cgi

def htmlTop():
    print("""Content-type:text/html\n\n
             <!DOCTYPE html>
             <html>
                 <head lang="en">
                     <meta charset="utf-8" />
                     <title>CGI Template</title>
                 </head>
                 <body>""")

def htmlTail():
    print("""</body>
             </html>""")

# main program
    if __name_== "__main__":
        try:
            htmlTop()
            print("Hello world!")
            htmlTail()
        except:
            cgi.print_exception()

