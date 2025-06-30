#我搭建博客的过程
###使用github+mkdocs

###以mkdocs来构建blog的框架

 [这是官方文档](https://squidfunk.github.io/mkdocs-material/)
 
 [很有用的视频](https://www.bilibili.com/video/BV1hL4y1w72r)

1.根据官方文档下载相关的文档

2.新建一个mkdocs的文档及相关的文件

```
mkdocs new mkdocs-site
cd mkdocs-site
mkdir .github
cd .github
mkdir workflows
cd workflows
vim PublishMySite.yml  
```
```PublishMySite.yml 
name: Deploy to GitHub Pages
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Set up Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: 3.2  # 根据你的项目需求调整 Ruby 版本
      - name: Install dependencies
        run: |
          gem install bundler
          bundle install
      - name: Build Jekyll site
        run: |
          JEKYLL_ENV=production bundle exec jekyll build --source docs --destination docs/_site
      - name: Deploy to GitHub Pages
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          touch docs/_site/.nojekyll
          git config --global user.name "github-actions[bot]"
          git config --global user.email "github-actions[bot]@users.noreply.github.com"
          git add docs/_site
          git commit -m "Deploy to GitHub Pages"
          git push origin main:gh-pages --force  
```      
3.根据教程得到相关的配置，完善其中的.yml文件（一般是mkdocs.yml)
>尤其关于nav的配置，需要根据需要生成对应的.md文件
>>特别要注意文件的格式,尤其注意缩进与分隔符, YAML 文件中的每一级缩进必须使用相同数量的空格（通常是 2 个或 4 个空格）        ，而不能使用 Tab
>>>运行 mkdocs serve 命令查看是否有错误

4.假如在虚拟机上可以通过mkdocs serve 得到目标的网页，即可进行上传

###上传到github的库
  
1.建立一个公开的（只有公开的库才能直接用github的page进行部署），用户名与库      名相同的库（否则会出现404）

2.回到虚拟机上，cd mkdocs-site (回到你的文档），上传到main.

3.根据情况进行下一步，假如无报错，显示上传成功。回到github，你会发现多了     一个gp-gapes分支，跳过以下步骤，直接到4。

假如报错，出现以下情况

```
ERROR   -  Config value 'theme': Unrecognised theme name: 'material'. The
           available installed themes are: mkdocs, readthedocs
ERROR   -  Config value 'markdown_extensions': Failed to load extension
           'pymdownx.arithmatex'.
           ModuleNotFoundError: No module named 'pymdownx'
Aborted with 2 configuration errors!
```

需要进入虚拟状态，运行以下命令行
```
python3 -m venv venv
source venv/bin/activate
pip install mkdocs-material pymdown-extensions
```
4.回到github,点击库的设置（settings),点击Pages，从Souce点Depioy from a branch,从Branch点gh-pages和/(root),点Save，等几分钟出现链接

5.网站建好了,需要进入虚拟状态的要退出虚拟模式
```
deactivate
```
