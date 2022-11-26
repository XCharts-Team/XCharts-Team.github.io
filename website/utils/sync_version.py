
import os
import sys
import shutil
import util


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


def _copy_extention_docs(xchartsPath, websitePath, prefixPath):
    srcPath = os.path.realpath(xchartsPath + "/../")
    dstPath = os.path.realpath(
        "{0}/{1}/lang/articles".format(websitePath, prefixPath))

    position = 7
    for dir in os.listdir(srcPath):
        dirPath = os.path.join(srcPath, dir)
        if os.path.isdir(dirPath) and dir.startswith("XCharts-") and dir != "XCharts-Extra":
            chartname = dir.split("-")[1].lower().replace("chart", "")
            dstFolder = "extra_"+chartname
            print("dir", chartname)

            srcReadmePath = os.path.join(dirPath, "README.md")
            dstReadmePath = os.path.join(dstPath, dstFolder, chartname+".md")
            util.mkdir(os.path.join(dstPath, dstFolder))
            util.fileCopy(srcReadmePath, dstReadmePath)
            util.fileReplaceContent(dstReadmePath, "Documentation~/zh/", "")
            util.fileInsertHead(
                dstReadmePath, "---\nsidebar_position: 0\nslug: /{0}\n---\n\n".format(chartname))

            srcApiPath = os.path.join(dirPath, "Documentation~/zh/api.md")
            dstApiPath = os.path.join(dstPath, dstFolder, "api.md")
            util.fileCopy(srcApiPath, dstApiPath)
            util.fileReplaceContent(
                dstApiPath, "/api", "/{0}_api".format(chartname))

            srcConfigPath = os.path.join(
                dirPath, "Documentation~/zh/configuration.md")
            dstConfigPath = os.path.join(
                dstPath, dstFolder, "configuration.md")
            util.fileCopy(srcConfigPath, dstConfigPath)
            util.fileReplaceContent(
                dstConfigPath, "/configuration", "/{0}_configuration".format(chartname))

            categoryName = util.fileFindLine(
                srcReadmePath, "#").split("#")[1].strip()
            categoryPath = os.path.join(
                dstPath, dstFolder, "_category_.json")
            util.fileWrite(categoryPath, "{0}\n\t\"label\": \"扩展图表-{1}\",\n\t\"position\": {2}\n{3}".format(
                "{", categoryName, position, "}"))

            position += 1


def _copy_extention_docs2(xchartsPath, websitePath, prefixPath):
    srcPath = os.path.realpath(xchartsPath + "/../")
    dstPath = os.path.realpath(
        "{0}/{1}/lang/articles".format(websitePath, prefixPath))

    position = 7
    extraPath = os.path.join(dstPath, "extra")
    util.mkdir(extraPath)

    extraImgPath = os.path.join(extraPath, "img")
    util.mkdir(extraImgPath)

    categoryPath = os.path.join(extraPath, "_category_.json")
    util.fileWrite(
        categoryPath, "{0}\n\t\"label\": \"扩展图表\",\n\t\"position\": 6\n{1}".format("{", "}"))

    for dir in os.listdir(srcPath):
        dirPath = os.path.join(srcPath, dir)
        if os.path.isdir(dirPath) and dir.startswith("XCharts-") and dir != "XCharts-Extra":
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
                dstReadmePath, "---\nsidebar_position: 0\nslug: /{0}\n---\n\n".format(chartname))

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


def sync_version(xchartsPath, websitePath, version):
    if version == "master":
        prefixPath = "docs"
        _copy_xcharts_docs(xchartsPath, websitePath, prefixPath)
        _copy_extention_docs2(xchartsPath, websitePath, prefixPath)
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


if __name__ == "__main__":
    xchartsPath = os.path.realpath(sys.argv[1].replace("\\", ""))
    websitePath = os.path.realpath(sys.argv[2].replace("\\", ""))
    version = sys.argv[3]
    print("xchartsPath", xchartsPath)
    print("websitePath", websitePath)
    print("version", version)
    sync_version(xchartsPath, websitePath, version)
