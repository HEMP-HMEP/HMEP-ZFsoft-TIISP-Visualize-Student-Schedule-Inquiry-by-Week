# 湖南机电职院教务系统“信息查询”添加“学生课表查询（按周次）”元素脚本
在正方教务系统首页的“信息查询”菜单中添加“学生课表查询（按周次）”项（需后端未被禁用）

<img width="199" height="349" alt="image" src="https://github.com/user-attachments/assets/606b51e2-e946-45cd-934e-2bc742c01458" />

# 使用教程
[点击查看](https://github.com/HEMP-HMEP/HMEP-Authserver-Autologin?tab=readme-ov-file#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)

# 行为
在页面包含`信息查询`的锚元素中的无序列表元素末尾添加以下元素：
```
<li>
    <a tabindex="-1"
        onclick="clickMenu('N2154','/kbcx/xskbcxZccx_cxXskbcxIndex.html','学生课表查询（按周次）','null'); return false;"
        href="javascript:void(0);" rel="noopener noreferrer" target="_blank">
        学生课表查询（按周次）
    </a>
</li>
```
