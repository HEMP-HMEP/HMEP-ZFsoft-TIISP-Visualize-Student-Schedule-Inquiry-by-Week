// ==UserScript==
// @name         湖南机电职院教务系统原生登录页跳转至统一登录界面
// @version      1.0
// @description  访问教务系统原生登录页时自动跳转到统一身份认证登录页（支持内网和WebVPN）
// @author       raccoon
// @homepage     https://github.com/HEMP-HMEP/HMEP-ZFsoft-TIISP-Login-To-SSO
// @match        http://172.16.101.107/jwglxt/xtgl/login_slogin.html*
// @match        *://webvpn.hnjdzy.edu.cn/http/77726476706e69737468656265737421a1a013d2766626012e59c7fdc802/jwglxt/xtgl/login_slogin.html*
// @icon         https://cloud.zfsoft.com:6143/jwglxt/logo/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const currentUrl = window.location.href;
    const oldPath = '/jwglxt/xtgl/login_slogin.html';
    const newPath = '/sso/driotlogin';

    // 查找旧路径在URL中的位置（可能包含查询参数和hash）
    const index = currentUrl.indexOf(oldPath);
    if (index !== -1) {
        // 提取旧路径之前的部分（协议、主机、VPN前缀等）
        const prefix = currentUrl.substring(0, index);
        // 提取旧路径之后的部分（查询参数和hash，如果有）
        const suffix = currentUrl.substring(index + oldPath.length);
        // 构建新URL：前缀 + 新路径 + 后缀
        const newUrl = prefix + newPath + suffix;

        // 使用 replace 跳转，不会在历史记录中留下原页面
        window.location.replace(newUrl);
    }
})();