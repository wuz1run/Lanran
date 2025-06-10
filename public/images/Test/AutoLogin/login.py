from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import time
from selenium.webdriver.common.keys import Keys
import json

# 设置浏览器选项（可开启无头模式）
options = Options()
options.add_argument('--headless')

# 打开 JSON 文件并读取
#输入对应的位置
with open('C:\Test\AutoLogin\config.json', 'r', encoding='utf-8') as file:
    data = json.load(file)  # 读取 JSON 数据到 Python 字典
# 获取键对应的值
username = data["username"]
password = data["password"]
# 初始化浏览器
driver = webdriver.Chrome(options=options)

try:
    # 打开校园网认证页面（断网状态下会自动跳转）
    driver.get("http://wlan.upc.edu.cn/"
               "&wlanparameter=bc-09-1b-81-2a-e5&url=http://www.upc.edu.cn/&uerlocation=ethtrunk/62:2921.0")

    wait = WebDriverWait(driver, 10)

    # 等待并填写用户名
    username_input = wait.until(EC.element_to_be_clickable((By.ID, "username")))
    username_input.click()
    username_input.send_keys(username)
    username_input.send_keys(Keys.TAB)
    # 等待并填写密码
    password_input = wait.until(EC.element_to_be_clickable((By.ID, "pwd")))
    password_input.send_keys(password)
    # 选择运营商：中国电信（页面中是 div 模拟的下拉框，不能用 Select）
    carrier_box = wait.until(EC.element_to_be_clickable((By.ID, "selectDisname")))
    carrier_box.click()
    time.sleep(1)  # 等待选项展开

    # 选择“中国电信”的 div,移动改成_service_2，联通改成_service_3,
    china_telecom_option = wait.until(EC.element_to_be_clickable((By.ID, "_service_4")))
    china_telecom_option.click()
    time.sleep(3)  # 等待选项展开
    # 提交登录
    login_button = wait.until(EC.element_to_be_clickable((By.ID, "loginLink_div")))
    login_button.click()

    time.sleep(2)
    print("尝试登录完成。")

except Exception as e:
    print("出错：", e)

finally:
    import upload
    driver.quit()
