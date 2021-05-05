# ISSUE BLOG

基于 GitHub API 的博客工具，尽情享受 GitHub Issue 带来的便利吧。


## Demo

[https://ttop5.github.io/issue-blog](https://ttop5.github.io/issue-blog)


## Usage

### 准备工作

#### 开发环境依赖

```
- git: ^v2.0.0
- node: ^v10.0.0
- yarn: ^v1.12.0
```

#### 获取 GitHub Token

点击 [这里](https://github.com/settings/tokens/new)，勾选以下两项：
```
read: user        Read all user profile data
user: email       Access user email addresses (read-only)
```
⚠️警告️：别的不要勾选，以免造成账号安全问题。

如果你的项目是属于一个组织的，还需要勾选一个权限：

```
read: org         Read org and team membership
```

#### GitHub Token 进行 Base64 加密

打开 Chrome 的 Console，运行：

```
window.btoa('{你的 GitHub Token}')
```

如果你把 Token 直接明文推到 GitHub 仓库中，此 Token 就会立马失效，所以需要加密混淆。

### 开始部署

1. Fork 此项目到自己仓库；
2. 将代码克隆到本地；
3. 编辑 `.env` 文件；
4. 安装依赖：`yarn install`；
5. 查看效果： `yarn dev`;
6. 部署：`yarn deploy`，项目仓库 -> `Settings` -> `GitHub Pages` -> `Source` -> 选择 `gh-pages branch` (`Enforce HTTPS` 选不选看你)；
7. 浏览器地址栏输入：`{你的用户名}.github.io/issue-blog` 查看。


## License

[MIT](https://github.com/ttop5/issue-blog/blob/master/LICENSE)


## Links

- [https://www.v2ex.com/t/586107](https://www.v2ex.com/t/586107)
- [https://github.com/ttop5/blog/issues/35](https://github.com/ttop5/blog/issues/35)

# Readme in English

# ISSUE BLOG

A blog tool based on GitHub API, enjoy the convenience brought by GitHub Issue.


## Demo

[https://ttop5.github.io/issue-blog](https://ttop5.github.io/issue-blog)


## Usage

### Ready to work

#### Development environment dependency

```
-git: ^v2.0.0
-node: ^v10.0.0
-yarn: ^v1.12.0
```

#### Get GitHub Token

Click [here](https://github.com/settings/tokens/new), check the following two:
```
read: user Read all user profile data
user: email Access user email addresses (read-only)
```
⚠️Warning️: Don’t check anything else to avoid account security problems.

If your project belongs to an organization, you also need to check a permission:

```
read: org Read org and team membership
```

#### GitHub Token for Base64 encryption

Open Chrome's Console and run:

```
window.btoa('{Your GitHub Token}')
```

If you push the Token directly to the GitHub repository in plaintext, the Token will immediately become invalid, so encryption and confusion are required.

### Start deployment

1. Fork this item to your own warehouse;
2. Clone the code locally;
3. Edit the `.env` file;
4. Installation dependency: `yarn install`;
5. Check the effect: `yarn dev`;
6. Deployment: `yarn deploy`, project repository -> `Settings` -> `GitHub Pages` -> `Source` -> select `gh-pages branch` (If you choose `Enforce HTTPS`, it will see you);
7. Enter in the address bar of the browser: `{your user name}.github.io/issue-blog` to view.


## License

[MIT](https://github.com/ttop5/issue-blog/blob/master/LICENSE)


## Links

-[https://www.v2ex.com/t/586107](https://www.v2ex.com/t/586107)
-[https://github.com/ttop5/blog/issues/35](https://github.com/ttop5/blog/issues/35)