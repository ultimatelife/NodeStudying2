lb_ip = "192.168.43.117"

try:
    f = open("../public/config/js/ip.js", "w")
    f.write("var ip = " + lb_ip + ";")
    f.close()
except:
    print("Error")

print("load balance : " + lb_ip)