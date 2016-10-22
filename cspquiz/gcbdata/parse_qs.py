# Make sure App Engine APK is available
import sys
import logging
import json
sys.path.append('/usr/local/google_appengine/')
from google.appengine.api.files import records
from google.appengine.datastore import entity_pb
from google.appengine.api import datastore
 
if len(sys.argv) == 1:
    print 'need filename'
    sys.exit(-1)


# Properties in the GCB questions Entity
# defaultFeedback : 
# description : AND gate
# skills : []
# multiple_selections : False
# question : An AND gate is an electronic component that takes two inputs, A and B, such that
# choices : [{u'text': u'the gate will be TRUE (or ON) when either A or B is TRUE (or ON).', u'score': 0.0, u'feedback': u'OK, so you didn\u2019t get it right this time. Let\u2019s look at this as an opportunity to learn. An OR gate would be TRUE (or ON) when either A or B is TRUE (or ON).'}, {u'text': u'the gate will be TRUE (or ON) when both A and B are TRUE (or ON).', u'score': 1.0, u'feedback': u''}, {u'text': u'the gate will be TRUE (or ON) when A is TRUE (or ON).', u'score': 0.0, u'feedback': u'OK, so you didn\u2019t get it right this time. Let\u2019s look at this as an opportunity to learn. For the AND gate to be TRUE (or ON) B would also have to be TRUE (or ON).'}, {u'text': u'the gate will be TRUE (or ON) when B is TRUE (or ON).', u'score': 0.0, u'feedback': u'OK, so you didn\u2019t get it right this time. Let\u2019s look at this as an opportunity to learn. For the AND gate to be TRUE (or ON) A would also have to be TRUE (or ON).'}]
# version : 1.5
# last_modified : 1474648202.64
# permute_choices : False
# all_or_nothing_grading : False
# modules.skill_map.skill_list : []
# type : 0
# show_answer_when_incorrect : False


raw = open(sys.argv[1], 'r')
reader = records.RecordsReader(raw)
questions = []
for record in reader:
    entity_proto = entity_pb.EntityProto(contents=record)
    questions.append( datastore.Entity.FromPb(entity_proto)['data'])

#print('***RAM*** entity = ' + str(questions) + '\n\n')

k = 0
question0 = json.loads(questions[0])
for prop in question0:
    print prop, ':', question0[prop]
print

csp_qs = []
k = 0
for question in questions:
    if k == 23:
         print str(question)
    csp_q = {}
    qobj = json.loads(question)
    if 'defaultFeedback' in qobj:
        csp_q['wrongfeedback'] = qobj['defaultFeedback']
    if 'feedback' in qobj:
        csp_q['rightfeedback'] = qobj['feedback']
    if 'graders' in qobj:
        csp_q['graders'] = qobj['graders']
    if 'hint' in qobj:
        csp_q['hint'] = qobj['hint']
    csp_q['description'] = qobj['description']
    csp_q['question'] = qobj['question']
    if 'choices' in qobj:
        csp_q['choices'] = qobj['choices']
    if 'permute_choices' in qobj:
        csp_q['permute'] = qobj['permute_choices']
    csp_q['type'] = qobj['type']
    csp_qs.append(csp_q)
    k += 1

k = 0
for question in csp_qs:
    print k, question['description'], question['type']
    k += 1

with open(sys.argv[1] + '.json', 'w') as outfile:
    json.dump(csp_qs, outfile)
