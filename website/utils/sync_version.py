
import os
import sys
import shutil
import util

g_filter_repo = ["XCharts-UI", "XCharts-Daemon"]

def _copy_xcharts_docs(xchartsPath, websitePath, prefixPath):
    srcPath = os.path.realpath(xchartsPath + "/Documentation~/zh/")
    dstPath = os.path.realpath(
        "{0}/{1}/lang/articles".format(websitePath, prefixPath))
    util.copyDir(srcPath, dstPath)

    srcReadmePath = os.path.join(xchartsPath, "README.md")
    dstReadmePath = os.path.join(dstPath, "about.md")
    util.fileCopy(srcReadmePath, dstReadmePath)
    util.fileInsertHead(
        dstReadmePath, "---\nsidebar_position: 0\nslug: /about\n---\n\n# 关于XCharts\n\n")
    util.fileReplaceContent(dstReadmePath, "Documentation~/zh/", "")
    util.fileReplaceContent(dstReadmePath, "README-en.md", "")


def _copy_extra_docs(xchartsPath, websitePath, prefixPath):
    srcPath = os.path.realpath(xchartsPath + "/../")
    dstPath = os.path.realpath(
        "{0}/{1}/lang/articles".format(websitePath, prefixPath))

    extraPath = os.path.join(dstPath, "extra")
    util.mkdir(extraPath)

    extraImgPath = os.path.join(extraPath, "img")
    util.mkdir(extraImgPath)

    categoryPath = os.path.join(extraPath, "_category_.json")
    util.fileWrite(
        categoryPath, "{0}\n\t\"label\": \"扩展图表\",\n\t\"position\": 71\n{1}".format("{", "}"))

    for dir in os.listdir(srcPath):
        dirPath = os.path.join(srcPath, dir)
        if os.path.isdir(dirPath) and dir.startswith("XCharts-") and (dir not in g_filter_repo):
            chartname = dir.split("-")[1].lower().replace("chart", "")
            filename = chartname+".md"

            srcReadmePath = os.path.join(dirPath, "README.md")
            dstReadmePath = os.path.join(extraPath, filename)
            util.fileCopy(srcReadmePath, dstReadmePath)
            util.fileReplaceContent(
                dstReadmePath, "Documentation~/zh/api.md", "#api")
            util.fileReplaceContent(
                dstReadmePath, "Documentation~/zh/configuration.md", "#配置项手册")
            util.fileReplaceContent(
                dstReadmePath, "Documentation~/zh/", "")
            util.fileReplaceContent(
                dstReadmePath, "\<p align=\"center\"\>", "<p align=\"center\" className=\"flex items-center\">")
            util.fileInsertHead(
                dstReadmePath, "---\nsidebar_position: 0\nslug: /{0}\n---\nimport APITable from '@site/src/components/APITable';\n\n".format(chartname))

            util.copyDir(os.path.join(
                dirPath, "Documentation~/zh/img"), extraImgPath)

            srcApiPath = os.path.join(dirPath, "Documentation~/zh/api.md")
            srcConfigPath = os.path.join(
                dirPath, "Documentation~/zh/configuration.md")

            content = util.fileRead(srcApiPath).replace("## ", "### ")
            content = content.replace("# API", "## API")
            util.fileInsertTail(dstReadmePath, "\n"+content)

            content = util.fileRead(srcConfigPath).replace("## ", "### ")
            content = content.replace("# 配置项手册", "## 配置项手册")
            util.fileInsertTail(dstReadmePath, content)


def _copy_ui_docs(xchartsPath, websitePath, prefixPath):
    srcPath = os.path.realpath(xchartsPath + "/../")
    dstPath = os.path.realpath(
        "{0}/{1}/lang/articles".format(websitePath, prefixPath))

    extraPath = os.path.join(dstPath, "ui")
    util.mkdir(extraPath)

    extraImgPath = os.path.join(extraPath, "img")
    util.mkdir(extraImgPath)

    categoryPath = os.path.join(extraPath, "_category_.json")
    util.fileWrite(
        categoryPath, "{0}\n\t\"label\": \"扩展组件\",\n\t\"position\": 70\n{1}".format("{", "}"))

    dirPath = os.path.join(srcPath, "XCharts-UI")
    if os.path.isdir(dirPath):
        chartname = "ui"
        filename = chartname+".md"

        srcReadmePath = os.path.join(dirPath, "README.md")
        dstReadmePath = os.path.join(extraPath, filename)
        util.fileCopy(srcReadmePath, dstReadmePath)
        util.fileReplaceContent(
            dstReadmePath, "Documentation~/zh/", "")
        util.fileInsertHead(
            dstReadmePath, "---\nsidebar_position: 0\nslug: /{0}\n---\n\n".format(chartname))

        util.copyDir(os.path.join(
            dirPath, "Documentation~/zh/img"), extraImgPath)

        docPath = dirPath + "/Documentation~/zh"
        for dirpath, dirnames, filenames in os.walk(docPath):
            for filename in filenames:
                if filename.endswith(".md") and filename.startswith("ui_"):
                    srcPath = os.path.join(dirpath, filename)
                    dstPath = os.path.join(extraPath, filename)
                    util.fileCopy(srcPath, dstPath)


def _copy_demo(websitePath, demoPath, version):
    verionPath = websitePath+"/static/examples/"+version
    if not os.path.exists(verionPath):
        util.mkdir(verionPath)
        util.mkdir(verionPath+"/Build")
    util.copyDir(demoPath + "/Build", websitePath +
                 "/static/examples/"+version+"/Build")


def sync_version(xchartsPath, websitePath, demoPath, version):
    if version == "master":
        prefixPath = "docs"
        _copy_xcharts_docs(xchartsPath, websitePath, prefixPath)
        _copy_extra_docs(xchartsPath, websitePath, prefixPath)
        _copy_ui_docs(xchartsPath, websitePath, prefixPath)
        _copy_demo(websitePath, demoPath, "master")
    else:
        prefixPath = "versioned_docs/version-{0}".format(version)
        srcPath = websitePath + "/docs"
        dstPath = websitePath + "/" + prefixPath
        util.copyDir(srcPath, dstPath)

        # cp ./versioned_sidebars/default.json ./versioned_sidebars/version-$version-sidebars.json
        srcPath = websitePath + "/versioned_sidebars/default.json"
        dstPath = websitePath + \
            "/versioned_sidebars/version-{0}-sidebars.json".format(version)
        util.fileCopy(srcPath, dstPath)

        srcPath = websitePath + "/src/pages/api/master"
        dstPath = websitePath + "/src/pages/api/{0}".format(version)
        util.copyDir(srcPath, dstPath)

        _copy_demo(websitePath, demoPath, version)

if __name__ == "__main__":
    xchartsPath = os.path.realpath(sys.argv[1].replace("\\", ""))
    websitePath = os.path.realpath(sys.argv[2].replace("\\", ""))
    demoPath = os.path.realpath(sys.argv[3].replace("\\", ""))
    version = sys.argv[4]
    print("xchartsPath", xchartsPath)
    print("websitePath", websitePath)
    print("demoPath", demoPath)
    print("version", version)
    sync_version(xchartsPath, websitePath, demoPath, version)
