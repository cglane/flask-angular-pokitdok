from app import app
from flask import render_template, jsonify, session,request
import pokitdok
import matplotlib.pyplot as plt
from lib.buildchart import drawBubbleChart
#submit an eligibility request
def new_token_handler(token):
    print('new token received: {0}'.format(token))
    # persist token information for later use
partners_data = [{"enrollment_required":[],"id":"8th_district_electrical","is_enabled":True,"name":"8th District Electrical Benefit Fund","restricted_transactions":["837"],"supported_transactions":["837"]},{"enrollment_required":[],"id":"aarp_medicare_complete","is_enabled":True,"name":"AARP Medicare Complete","restricted_transactions":["837"],"supported_transactions":["837","270","276"]},{"enrollment_required":[],"id":"aarp_medicare_supplement","is_enabled":True,"name":"AARP Medicare Supplement Plan (Fixed or Hospital Indemnity)","restricted_transactions":["837"],"supported_transactions":["270","837","276"]},{"enrollment_required":[],"id":"asr_health_benefits","is_enabled":True,"name":"ASR Health Benefits","restricted_transactions":[],"supported_transactions":["270"]},{"enrollment_required":[],"id":"absolute_total_care","is_enabled":True,"name":"Absolute Total Care","restricted_transactions":["837"],"supported_transactions":["276","837","270"]},{"enrollment_required":[],"id":"aetna","is_enabled":True,"name":"Aetna","restricted_transactions":["837","278"],"supported_transactions":["837","276","270","278"]}]
@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html',
                           title='Home',
                           )

@app.route('/api/trading_partners',methods = ['GET'])
def get_partners():
    pd = pokitdok.api.connect(app.config['CLIENT_ID'], app.config['CLIENT_SECRET'])
    partners_data = pd.trading_partners()
    return jsonify(partners_data['data'][0:10])
    # return jsonify(partners_data)
@app.route('/api/create_chart',methods = ['POST'])
def get_chart():
    partners_data = request.json['partners_data']
    fileName = request.json['fileName']
    ####Limit Partners to 10
    filePath = drawBubbleChart(testing_data = partners_data, fileName = fileName)
    return jsonify({'result':filePath})
