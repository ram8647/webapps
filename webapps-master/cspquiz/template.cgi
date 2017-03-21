#!/usr/bin/python2.7

# See https://pythonschool.net/server-side-scripting/preparing-for-your-first-script/
import cgi

def htmlTop():
    print "Content-type:text/html\n\n"
    print "<!DOCTYPE html>"
    print "<html><head lang='en'><meta charset='utf-8' />"
    print "<title>CGI Template</title>"
    print "</head> <body>"

def htmlTail():
    print "</body></html>"

# main program
    if __name__== "__main__":
        try:
            htmlTop()
            print "Hello world!"
            htmlTail()
        except:
            cgi.print_exception()

