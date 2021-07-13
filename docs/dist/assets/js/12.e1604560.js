(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{371:function(v,_,a){"use strict";a.r(_);var t=a(45),s=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"图片处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片处理"}},[v._v("#")]),v._v(" 图片处理")]),v._v(" "),a("p",[v._v("本文将介绍图片的优化、以及一些处理图片的方式")]),v._v(" "),a("h2",{attrs:{id:"图片优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片优化"}},[v._v("#")]),v._v(" 图片优化")]),v._v(" "),a("blockquote",[a("p",[v._v("所有的图片必须使用"),a("a",{attrs:{href:"https://tinypng.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("压缩工具"),a("OutboundLink")],1),v._v("或者采用"),a("a",{attrs:{href:""}},[v._v("自动化压缩图片方案")]),v._v("压缩后使用，不可直接使用")])]),v._v(" "),a("ol",[a("li",[v._v("图片体积不可以超过300K")]),v._v(" "),a("li",[v._v("上线的图片都应该经过压缩处理，压缩后的图片不应该出现肉眼可感知的失真区域")]),v._v(" "),a("li",[v._v("JPG图片必须压缩，一般80%品质即可，保证文字清晰")]),v._v(" "),a("li",[v._v("JPG图片可以使用渐进式图片：使用PS的“存储为web所用格式”时候，勾选“连续”（可以配合UI操作）🌟")]),v._v(" "),a("li",[v._v("装饰性图片合并成精灵图，减少页面请求或者采取svg的方式")]),v._v(" "),a("li",[v._v("可以采用懒加载的方式，只加载出现在视图内的图片")]),v._v(" "),a("li",[v._v("PC平台单张的图片的大小不应大于 200KB")]),v._v(" "),a("li",[v._v("移动平台单张的图片的大小不应大于 100KB。")])]),v._v(" "),a("h2",{attrs:{id:"图片标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片标签"}},[v._v("#")]),v._v(" 图片标签")]),v._v(" "),a("ol",[a("li",[v._v("PC端img图片必须包含 "),a("code",[v._v("width")]),v._v("、"),a("code",[v._v("height")]),v._v("、"),a("code",[v._v("alt")]),v._v(" 属性")]),v._v(" "),a("li",[v._v("移动端必须写 "),a("code",[v._v("alt")]),v._v(" 属性")]),v._v(" "),a("li",[v._v("alt不能是没有意义的字符，需要能表现出图片的含义（如果图片是个书本，那么应该是书本的名称）")]),v._v(" "),a("li",[v._v("CSS中引入图片不需要用引号")])]),v._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[v._v(".element")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[v._v("background-image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(":")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[v._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),v._v("icon.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n")])])]),a("h2",{attrs:{id:"图片名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片名称"}},[v._v("#")]),v._v(" 图片名称")]),v._v(" "),a("p",[v._v("用间断有意义的英文或者拼音（不可以中文）来命名。")]),v._v(" "),a("p",[v._v("第一个单词首字母小写，之后每个单词首字母大写，或者全部小写，单词间用下划线连接。例如(btn_sign.gif， bgTipBox.png)。")]),v._v(" "),a("p",[v._v("这里推荐采用全部小写，单词间用下划线连接")]),v._v(" "),a("h2",{attrs:{id:"图片格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片格式"}},[v._v("#")]),v._v(" 图片格式")]),v._v(" "),a("p",[v._v("常见图片格式有 GIF、PNG8、PNG24、JPEG、WEBP、SVG等。")]),v._v(" "),a("h3",{attrs:{id:"gif"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gif"}},[v._v("#")]),v._v(" GIF")]),v._v(" "),a("ul",[a("li",[v._v("优秀的压缩算法使其在一定程度上保证图像质量的同时将体积变得很小。")]),v._v(" "),a("li",[v._v("可插入多帧，从而实现动画效果。")]),v._v(" "),a("li",[v._v("可设置透明色以产生对象浮现于背景之上的效果。")]),v._v(" "),a("li",[v._v("由于采用了8位压缩，最多只能处理256种颜色，故不宜应用于真彩色图片")])]),v._v(" "),a("h3",{attrs:{id:"png"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#png"}},[v._v("#")]),v._v(" PNG")]),v._v(" "),a("blockquote",[a("p",[v._v("关键点: 无损压缩、质量高、体积大、支持透明")])]),v._v(" "),a("ul",[a("li",[v._v("优点\n"),a("ul",[a("li",[v._v("支持256色调色板技术")]),v._v(" "),a("li",[v._v("无损压缩")]),v._v(" "),a("li",[v._v("最高支持48位真彩色图像以及16位灰度图像。")]),v._v(" "),a("li",[v._v("支持Alpha通道的透明/半透明特性。")])])]),v._v(" "),a("li",[v._v("缺点\n"),a("ul",[a("li",[v._v("体积大")])])]),v._v(" "),a("li",[v._v("应用场景\n"),a("ul",[a("li",[v._v("处理线条和颜色对比度方面的优势")])])])]),v._v(" "),a("h3",{attrs:{id:"jpeg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jpeg"}},[v._v("#")]),v._v(" JPEG")]),v._v(" "),a("blockquote",[a("p",[v._v("关键点：有损压缩、体积小、加载快、不支持透明")])]),v._v(" "),a("ul",[a("li",[v._v("优点：有损压缩，可以保住图片的质量，减少体积")]),v._v(" "),a("li",[v._v("缺点\n"),a("ul",[a("li",[v._v("处理矢量图形和 Logo 等线条感较强、颜色对比强烈的图像时，人为压缩导致的图片模糊会相当明显")]),v._v(" "),a("li",[v._v("JPEG 图像不支持透明度处理，透明图片需要召唤 PNG 来呈现")])])]),v._v(" "),a("li",[v._v("应用场景\n"),a("ul",[a("li",[v._v("轮播图、大图")])])])]),v._v(" "),a("h3",{attrs:{id:"svg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#svg"}},[v._v("#")]),v._v(" SVG")]),v._v(" "),a("blockquote",[a("p",[v._v("关键点：文本文件、体积小、不失真、兼容性好")])]),v._v(" "),a("ul",[a("li",[v._v("优点\n"),a("ul",[a("li",[v._v("体积小，尺寸更小，且可压缩性更强")]),v._v(" "),a("li",[v._v("可伸缩的，任何分辨率都可以高质量打印")]),v._v(" "),a("li",[v._v("可以和JS一起运行")])])]),v._v(" "),a("li",[v._v("缺点\n"),a("ul",[a("li",[v._v("渲染成本相对其他图片格式较高，对性能略有影响")])])]),v._v(" "),a("li",[v._v("应用场景\n"),a("ul",[a("li",[v._v("插入在线矢量图形")])])])]),v._v(" "),a("h3",{attrs:{id:"webp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webp"}},[v._v("#")]),v._v(" WEBP")]),v._v(" "),a("ul",[a("li",[v._v("同时提供有损压缩和无损压缩两种图片文件格式")]),v._v(" "),a("li",[v._v("文件体积小，无损压缩后，比 PNG 文件少了 45％ 的文件大小；有损压缩后，比 JPEG 文件少了 25% - 34% 文件大小")]),v._v(" "),a("li",[v._v("浏览器兼容差，目前只支持客户端 Chrome 和 Opera 浏览器以及安卓原生浏览器(Andriod 4.0+)")])]),v._v(" "),a("h3",{attrs:{id:"内容图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容图"}},[v._v("#")]),v._v(" 内容图")]),v._v(" "),a("p",[v._v("内容图一般都是照片类的图片，颜色都是比较丰富的，体积也是比较大的")]),v._v(" "),a("ul",[a("li",[v._v("优先考虑JPEG格式、条件允许的话可以采用WebP格式")]),v._v(" "),a("li",[v._v("尽量不用PNG格式，毕竟PNG8色位太低、PNG24压缩率低，体积也大")])]),v._v(" "),a("h3",{attrs:{id:"背景图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景图"}},[v._v("#")]),v._v(" 背景图")]),v._v(" "),a("p",[v._v("背景图一般就是图片等颜色比较简单、体积又不是很大，装饰作用的图片")]),v._v(" "),a("ul",[a("li",[v._v("PNG和GIF 格式，优先考虑PNG，毕竟PNG格式允许更多颜色并可以提供更好的压缩率")]),v._v(" "),a("li",[v._v("图像颜色比较简单的，可以优先考虑PNG8格式，避免JPEG格式")]),v._v(" "),a("li",[v._v("图片颜色丰富而且图片体积不大（40KB以下）或者有半透明效果的优先考虑PNG24格式")]),v._v(" "),a("li",[v._v("图像颜色丰富而且体积大的（40KB-200KB）优先考虑JPEG格式")]),v._v(" "),a("li",[v._v("如果条件都允许的话，那么优先考虑WebP代替PNG和JEPG格式")])]),v._v(" "),a("h2",{attrs:{id:"雪碧图和base64编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#雪碧图和base64编码"}},[v._v("#")]),v._v(" 雪碧图和BASE64编码")]),v._v(" "),a("h3",{attrs:{id:"雪碧图特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#雪碧图特点"}},[v._v("#")]),v._v(" 雪碧图特点")]),v._v(" "),a("ul",[a("li",[v._v("减少请求数")]),v._v(" "),a("li",[v._v("加速图片的显示")]),v._v(" "),a("li",[v._v("维护更新成本大")]),v._v(" "),a("li",[v._v("更多的内存消耗，特别是大体积或有过多空白的雪碧图")]),v._v(" "),a("li",[v._v("图片渗漏，相邻的不需展示的图片有可能出现在展示元素中，特别是在高清设备移动设备上")])]),v._v(" "),a("h3",{attrs:{id:"雪碧图使用建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#雪碧图使用建议"}},[v._v("#")]),v._v(" 雪碧图使用建议")]),v._v(" "),a("ul",[a("li",[v._v("适合使用频率高更新频率低的小图标")]),v._v(" "),a("li",[v._v("尽量不留太多的空白")]),v._v(" "),a("li",[v._v("体积较大的图片不合并")]),v._v(" "),a("li",[v._v("确保要合并的小图坐标数值和合并后的雪碧图图尺寸均为偶数")])]),v._v(" "),a("blockquote",[a("p",[v._v("当然更推荐使用svg毕竟对于绝大部分图案、图标等、矢量图更小，可缩放还不用生成多套，并且主流浏览器都支持svg了。")])]),v._v(" "),a("h3",{attrs:{id:"base64图片特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base64图片特点"}},[v._v("#")]),v._v(" BASE64图片特点")]),v._v(" "),a("ul",[a("li",[v._v("减少请求数")]),v._v(" "),a("li",[v._v("转换文件体积大，大约比原始的二进制大33%")]),v._v(" "),a("li",[v._v("IE6 / IE7 不支持")]),v._v(" "),a("li",[v._v("图片显示相对较慢，需要更多的CPU消耗")])]),v._v(" "),a("h3",{attrs:{id:"base64使用建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base64使用建议"}},[v._v("#")]),v._v(" BASE64使用建议")]),v._v(" "),a("ul",[a("li",[v._v("适合更新频率高的小图片，如某些具备自定义功能的标题icon等")]),v._v(" "),a("li",[v._v("转换成 Base64 编码的图片应小于 2KB")]),v._v(" "),a("li",[v._v("移动端不使用 Base64 编码")]),v._v(" "),a("li",[v._v("要兼容 IE6/IE7 的不使用")])])])}),[],!1,null,null,null);_.default=s.exports}}]);