// ==UserScript==

// @name         湖南机电职院教务系统“信息查询”添加“学生课表查询（按周次）”元素
// @version      1.0
// @description  在正方教务系统首页的“信息查询”菜单中添加“学生课表查询（按周次）”项（适配湖南机电教务系统地址，分支至Short-Arm-Ape/ZFsoft-TIISP-Visualize-Student-Schedule-Inquiry-by-Week）
// @author       短臂猿-Short_Arm_Ape/raccoon
// @homepage     https://github.com/HEMP-HMEP/HMEP-ZFsoft-TIISP-Visualize-Student-Schedule-Inquiry-by-Week/
// @match        http://172.16.101.107/jwglxt/xtgl/index_initMenu.html*
// @match        *://webvpn.hnjdzy.edu.cn/http/77726476706e69737468656265737421a1a013d2766626012e59c7fdc802/jwglxt/xtgl/index_initMenu.html*
// @icon         https://cloud.zfsoft.com:6143/jwglxt/logo/favicon.ico
// @grant        none
// ==/UserScript==

(function() {

    'use strict';

    /**

     * 在“信息查询”下拉菜单中添加指定菜单项

     */

    function addMenuItem() {

        // 找到主导航中所有带下拉菜单的 li

        const navLis = document.querySelectorAll('.nav.navbar-nav > li.dropdown');

        let targetMenuUl = null;

        // 遍历，定位包含“信息查询”文本的下拉菜单

        for (let li of navLis) {

            const toggleLink = li.querySelector('a.dropdown-toggle');

            if (toggleLink && toggleLink.textContent.includes('信息查询')) {

                targetMenuUl = li.querySelector('ul.dropdown-menu');

                break;

            }

        }

        // 未找到目标菜单，直接返回

        if (!targetMenuUl) return;

        // 检查菜单中是否已经存在“学生课表查询（按周次）”项

        const existingLinks = targetMenuUl.querySelectorAll('a');

        for (let link of existingLinks) {

            if (link.textContent.trim() === '学生课表查询（按周次）') {

                return; // 已存在，不做任何操作

            }

        }

        // 构造新菜单项（样式与原有项完全一致）

        const newLi = document.createElement('li');

        newLi.innerHTML = `<a tabindex="-1" onclick="clickMenu('N2154','/kbcx/xskbcxZccx_cxXskbcxIndex.html','学生课表查询（按周次）','null'); return false;" href="javascript:void(0);" rel="noopener noreferrer" target="_blank">学生课表查询（按周次）</a>`;

        // 将新项追加到下拉菜单末尾

        targetMenuUl.appendChild(newLi);

    }

    // 根据页面加载状态尝试执行

    if (document.readyState === 'loading') {

        document.addEventListener('DOMContentLoaded', addMenuItem);

    } else {

        addMenuItem();

    }

    // 额外使用 load 事件确保万无一失（部分异步加载的菜单也能覆盖）

    window.addEventListener('load', addMenuItem);

})();
