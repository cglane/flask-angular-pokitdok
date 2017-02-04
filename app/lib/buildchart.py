
import matplotlib.pyplot as plt
import numpy as np
import os
dir_path = os.path.dirname(os.path.realpath(__file__))

def drawBubbleChart(testing_data,fileName = 'chart.png',\
 data_point = 'supported_transactions', y_label = '# Supported Transactions', title = "Partners"):
    # reading the data from a csv file
    x = []
    y = []
    color = []
    area = []

    for itr,data in enumerate(testing_data):
     y.append(len(data[data_point])) #number of supported_transactions
     x.append(itr)
     area.append(len(data[data_point])*500) # size of bubble
    #Make random color rainbow
    colors=plt.cm.rainbow(np.random.rand(len(x)))
    #Make scatter plot
    plt.scatter(x, y, c=colors, s=area, linewidths=2, edgecolor='w')
    for i in range(len(x)):
        plt.annotate(testing_data[i]['name'][0:6],xy=(x[i],y[i]))
    #Set Labels & Title
    plt.ylabel(y_label)
    plt.title(title)
    ##Create Figure to be saved
    fig1 = plt.gcf()
    plt.draw()

    filePath = './app/static/charts/'+fileName
    fig1.savefig(filePath, dpi=100)
    return '/static/charts/'+fileName
