module.exports = {
  presets: [
    ["@babel/preset-env", 
    { 
      targets: "defaults" ,
      // fslse: 不对当前的JS处理做 polyfill 的填充
      // usage：依据用户源代码中所用到的信誉发进行填充
      // entry： 依据浏览器中所需要的进行填充，需要手动 import 核心包相关
      useBuiltIns: 'usage',
      corejs: 3
    }]
  
  ],
};
