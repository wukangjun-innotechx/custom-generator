export default [
{
"name": "home",
"path": "/home",
"component": () => import('@/pages/home/index.js'),
"children": []
},
{
"name": "login",
"path": "/login",
"component": () => import('@/pages/login/index.js'),
"children": [
{
"name": "login_a",
"path": "/login/login_a",
"component": () => import('@/pages/login/login_a/index.js'),
"children": []
}
]
}
]