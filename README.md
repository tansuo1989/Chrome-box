# dd-box
读点工具，chrome拓展程序
(改名为dd-box)

# 功能
1. 右键收藏链接到读点
2. 动态地在浏览器中注入js代码，支持jQuery.js
3. 添加鼠标手势的功能
4. 显示当前页面 url 的二维码
5. 百度知道助手（添加关注和我的关注，问题详情大图方向键切换)


# 使用方法

1. 下载： git clone https://github.com/tansuo1989/dd-box.git
2. 打开 chrome 浏览器的“管理拓展程序”的页面
3. 选择“开发者模式”
4. 点击“加载已解压的拓展程序...”后选择 dd-box/src 这个文件夹
5. 刷新后在任意网页中点击右键即可看到“收藏到读点”的选项，点击后即可收藏
6. 若跳出读点的登录页面，请重新登录

# 注：
* 因为不是从 chrome 的应用商店安装的，每次重新打开浏览器后可能会提示不安全的拓展程序，选择不删除就好了
* 有什么问题可以直接在 Issues 中反馈给我

# 更新：
* 添加了直接在浏览器中添加 js 代码，可以在任意页面中执行，区别于 console 中最重要的一点是它可以在不同的页面跳转并自动执行
* 收藏、注入代码、鼠标手势功能是否开启，可在“拓展程序选项”中设置
* 2018.12.13 优化了关闭当前页面的功能，确保能干净地关闭当前页面
* 2019.7.24 添加显示当前页面url对应的二维码的功能
* 2020.4.17 添加百度知道的“关注”和“我的关注”的功能
* 2020.4.20 百度知道问题详情大图支持方向键左右切换

# TODO:
* 是否可能给百度知道回答时添加代码格式支持？










