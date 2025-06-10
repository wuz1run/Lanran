import re
import socket
import requests
import json
import getpass

username = getpass.getuser()
with open('C:\Test\AutoLogin\config.json', 'r', encoding='utf-8') as file:
    data = json.load(file)  # 读取 JSON 数据到 Python 字典


def upload_ip_to_api():
    # 获取本地 IP 地址
    def get_local_ip():
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        try:
            # 连接到 Google 的公共 DNS 服务器，获取本地 IP
            s.connect(('8.8.8.8', 80))
            ip = s.getsockname()[0]
        finally:
            s.close()
        return ip

    # 验证 IP 地址格式
    def validate_ip(ip_address):
        ip_pattern = r'^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$'
        return re.match(ip_pattern, ip_address) is not None

    # 获取本地 IP 地址
    ip_address = get_local_ip()
    if ip_address:
        print(f"The fetched IP address is: {ip_address}")

        # 验证 IP 地址格式
        if validate_ip(ip_address):
            print(f"Valid IP address: {ip_address}")

            # 设置目标 API URL
            api_url = data["server"]
            if api_url == "":
                return "No Server IP Found"
            # 创建表单数据
            form_data = {'ip': ip_address}

            try:
                # 发送 POST 请求
                response = requests.post(api_url, data=form_data)

                # 输出响应
                if response.status_code == 200:
                    print(f"IP address upload successful: {response.text}")
                    # 上传成功后调用 Server 酱推送
                    send_to_server_chan(ip_address)
                    return response.text  # 返回成功响应
                else:
                    print(f"IP address upload failed with status code {response.status_code}")
                    return None  # 返回失败响应

            except Exception as e:
                print(f"IP address upload failed: {str(e)}")
                return None  # 返回异常响应

        else:
            print(f"Invalid IP address: {ip_address}")
            return None  # 返回无效 IP 的情况
    else:
        print("Wireless network adapter not found.")
        return None  # 返回无线适配器未找到的情况


def send_to_server_chan(ip_address):
    # 请替换成你的 Server 酱 SCKEY
    sckey = data["key"]
    if sckey == "":
        return "No Key Found"
    # 构建消息内容
    message = f"当前 IP 地址: {ip_address}"

    # Server 酱推送 URL
    api_url = f"https://sctapi.ftqq.com/{sckey}.send"

    # 发送消息
    response = requests.get(api_url, params={'title': message, 'desp': username + message})

    # 检查请求结果
    if response.status_code == 200:
        print("Server 酱推送成功！")
    else:
        print("Server 酱推送失败！")


# 调用函数
result = upload_ip_to_api()

if result:
    print("上传结果:", result)
else:
    print("上传失败")
