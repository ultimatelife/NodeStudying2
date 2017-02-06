server_ip = input("What is you IP?")

try:
    f = open("ip.js", "w")
    f.write("var ip = " + server_ip + ";")
    f.close()
except:
    print("Error")

print(server_ip)