import os
from selenium import webdriver
from selenium.webdriver.common.by import By
import json

print(os.getcwd())

# arrays to store urls, titles, and images
wiredurl_array = []
wiredtitle_array = []
wiredimg_array = []

thehackerurl_array = []
thehackertitle_array = []
thehackerimg_array = []

venturebeaturl_array = []
venturebeattitle_array = []
venturebeatimg_array = []

# Google Chrome is the default search engine
browser = webdriver.Chrome()

# Opens the url and waits for it to load
def webpage(x):
    browser.get(x)
    browser.maximize_window()
    browser.implicitly_wait(5)

# Webpage URLS
wired_url = u'https://www.wired.com/category/security/'
thehacker_url = u'https://thehackernews.com/'
venturebeat_url = u'https://venturebeat.com/'

# webpage function use
webpage(wired_url)

# finds the article url elements, titles included in this one
wired_articles = browser.find_elements(By.XPATH, "//*[@id='main-content']/div[1]/div[1]/div/div/div[*]/div/div[2]/a")

# finds the image url elements
wired_images = browser.find_elements(By.XPATH, "//*[@id='main-content']/div[1]/div[1]/div/div/div[*]/div/div[1]/a/span/div/div/picture/img")

# adds each url and title to wired url and title arrays
for i in wired_articles[:3]:
    print(i.get_attribute("href"))
    wiredurl_array.append(i.get_attribute("href"))
    print(i.text)
    wiredtitle_array.append(i.text)

# adds each image url to a wired image array
for i in wired_images[:3]:
    print(i.get_attribute("src"))
    wiredimg_array.append(i.get_attribute("src"))

print("''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''")

# webpage function use
webpage(thehacker_url)

# finds the url and title elements
thehacker_articles = browser.find_elements(By.XPATH, "//*[@id='Blog1']/div[1]/div[*]/a")

# finds the image url elements
thehacker_images = browser.find_elements(By.XPATH, "//*[@id='Blog1']/div[1]/div[*]/a/div/div[1]/div/img")

print("\n")

# # adds each url and title to thehacker url and title arrays
for i in thehacker_articles[:4]:
    print(i.get_attribute("href"))
    thehackerurl_array.append(i.get_attribute("href"))
    print(i.text.split("\n",2)[0])
    thehackertitle_array.append(i.text.split("\n",2)[0])

# adds each image url to a thehacker image array
for i in thehacker_images[:4]:
    print(i.get_attribute("src"))
    thehackerimg_array.append(i.get_attribute("src"))

print("\n")

print("''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''")

# webpage function use
webpage(venturebeat_url)

# Formatting for the main article was different than the format of other top articles
# finds the url and title elements
mainarticle = browser.find_elements(By.CSS_SELECTOR, "body > div.skin-wrapper > div.FeaturedArticles >  * > a")
toparticles = browser.find_elements(By.CSS_SELECTOR, "body > div.skin-wrapper > div.FeaturedArticles > div > * > a")

# holds all venturebeat article urls and titles
venturebeat_articles = mainarticle + toparticles

# finds the image url elements
mainimage = browser.find_elements(By.CSS_SELECTOR, "body > div.skin-wrapper > div.FeaturedArticles > * > a > img")
topimages = browser.find_elements(By.CSS_SELECTOR, "body > div.skin-wrapper > div.FeaturedArticles > div > * > a > img")

# holds all venturebeat article image urls
venturebeat_images = mainimage + topimages

# adds each url and title to venturebeat url and title arrays
for i in venturebeat_articles[:3]:
    print(i.get_attribute("href"))
    venturebeaturl_array.append(i.get_attribute("href"))
    print(i.text)
    venturebeattitle_array.append(i.text)

# adds each image url to a venturebeat image array
for i in venturebeat_images[:3]:
    print(i.get_attribute("src"))
    venturebeatimg_array.append(i.get_attribute("src"))

print("''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''")

'''
# prints all arrays
print("\n")
print(wiredtitle_array)
print(wiredurl_array)
print(wiredimg_array)
print("\n")
print(thehackertitle_array)
print(thehackerurl_array)
print(thehackerimg_array)
print("\n")
print(venturebeattitle_array)
print(venturebeaturl_array)
print(venturebeatimg_array)


data = {
     'articles' : [
          {
               'title_one' : wiredtitle_array[0],
                'url_one' : wiredurl_array[0],
                'image_one' : wiredimg_array[0]
        },
        {
               'title_two' : thehackertitle_array[0],
               'url_two' : thehackerurl_array[0],
               'image_two' : thehackerimg_array[0]
           }
     ]
 }
json_object = json.dumps(data, indent=2)

with open('websites.json', 'w') as outfile:
    outfile.write(json_object)
    
'''