import httplib2
from BeautifulSoup import BeautifulSoup, SoupStrainer

http = httplib2.Http()
status, response = http.request('https://news.ycombinator.com/')

for link in BeautifulSoup(response, parseOnlyThese=SoupStrainer('a')):
    if link.has_attr('href'):
        print link['href']