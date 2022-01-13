import win32com.client

url = 'https://dappradar.com/rankings'

h = win32com.client.Dispatch('WinHTTP.WinHTTPRequest.5.1')
h.SetAutoLogonPolicy(0) # log in automatically

h.Open('GET', url, True)

# h.SetRequestHeaders(Your_Headers)
h.Send()

# print(h.status)

raw_html = h.responseText
print(raw_html)