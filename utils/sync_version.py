
import os
import sys
import shutil
import util

g_filter_repo = ["XCharts-UI", "XCharts-Daemon", "XCharts-GenDoc"]
g_i18n_dict = {
    "readme_filename": {
        "en": "README-en.md",
        "zh": "README.md"
    },
    "readme_title": {
        "en": "About XCharts",
        "zh": "关于XCharts"
    },
    "extra_chart_title": {
        "en": "Extra Charts",
        "zh": "扩展图表"
    },
    "ui_chart_title": {
        "en": "Extra UI",
        "zh": "扩展组件"
    },
    "configuration_title": {
        "en": "Configuration",
        "zh": "配置项手册"
    },
    "api_title": {
        "en": "API",
        "zh": "API手册"
    },
    "changelog_title": {
        "en": "Changelog",
        "zh": "更新日志"
    }
}

def _copy_xcharts_docs(xchartsPath, websitePath, prefixPath, lang):
    srcPath = os.path.realpath("{0}/Documentation~/{1}/".format(xchartsPath, lang))
    dstPath = os.path.realpath("{0}/{1}".format(websitePath, prefixPath))
    readmeFileName = g_i18n_dict["readme_filename"][lang]
    readmeTitle = g_i18n_dict["readme_title"][lang]
    print("srcPath", srcPath)
    print("dstPath", dstPath)
    util.copyDir(srcPath, dstPath)

    srcReadmePath = os.path.join(xchartsPath, readmeFileName)
    dstReadmePath = os.path.join(dstPath, "about.md")
    dstChangelogPath = os.path.join(dstPath, "changelog.md")
    util.fileCopy(srcReadmePath, dstReadmePath)
    util.fileInsertHead(dstReadmePath, "---\nsidebar_position: 0\nslug: /about\n---\n\n# {0}\n\n".format(readmeTitle))
    util.fileReplaceContent(dstReadmePath, "Documentation~/zh/", "")
    util.fileReplaceContent(dstReadmePath, "Documentation~/en/", "")
    util.fileReplaceContent(dstReadmePath, "README.md", "")
    util.fileReplaceContent(dstReadmePath, "README-en.md", "")
    util.fileReplaceContent(dstChangelogPath, "`{", "\\{")
    util.fileReplaceContent(dstChangelogPath, "}`", "\\}")


def _copy_extra_docs(xchartsPath, websitePath, prefixPath, lang):
    srcPath = os.path.realpath(xchartsPath + "/../")
    docFolder = "Documentation~/{0}/".format(lang)
    dstPath = os.path.realpath("{0}/{1}".format(websitePath, prefixPath))
    readmeFileName = g_i18n_dict["readme_filename"][lang]
    configuration_title = g_i18n_dict["configuration_title"][lang]
    changelog_title = g_i18n_dict["changelog_title"][lang]

    extraPath = os.path.join(dstPath, "extra")
    util.mkdir(extraPath)

    #extraImgPath = os.path.join(extraPath, "img")
    extraImgPath = os.path.join(websitePath, "static/img/extra")
    util.mkdir(extraImgPath)

    categoryPath = os.path.join(extraPath, "_category_.json")
    util.fileWrite(categoryPath, "{0}\n\t\"label\": \"{1}\",\n\t\"position\": 71,\n\t\"link\":{2}\n\t\t\"type\": \"generated-index\"\n\t{3}\n{4}".format(
        "{", g_i18n_dict["extra_chart_title"][lang], "{" ,"}", "}"))

    for dir in os.listdir(srcPath):
        dirPath = os.path.join(srcPath, dir)
        if os.path.isdir(dirPath) and dir.startswith("XCharts-") and (dir not in g_filter_repo):
            chartname = dir.split("-")[1]
            seriename = dir.split("-")[1].lower().replace("chart", "")
            filename = seriename+".md"

            srcReadmePath = os.path.join(dirPath, readmeFileName)
            if not os.path.exists(srcReadmePath):
                srcReadmePath = os.path.join(dirPath, "README.md")
            dstReadmePath = os.path.join(extraPath, filename)
            util.fileCopy(srcReadmePath, dstReadmePath)
            print(dstReadmePath)
            util.fileReplaceContent(dstReadmePath, docFolder + "api.md", "#api")
            util.fileReplaceContent(dstReadmePath, docFolder + "configuration.md", "#"+configuration_title)
            util.fileReplaceContent(dstReadmePath, docFolder, "")
            util.fileReplaceContent(dstReadmePath, "Documentation~/img/", "/img/extra/")
            
            util.fileReplaceContent(dstReadmePath, "<p align=\"center\">", "<p align=\"center\" className=\"flex items-center\">")
            if lang == "en":
                util.fileInsertHead(dstReadmePath, "---\ntitle: {0}\nsidebar_position: 0\nslug: /{1}\n---\n\n".format(chartname, seriename))
            else:
                util.fileInsertHead(dstReadmePath, "---\nsidebar_position: 0\nslug: /{0}\n---\n\n".format(seriename))


            util.copyDir(os.path.join(dirPath, "Documentation~/img"), extraImgPath)

            srcApiPath = os.path.join(dirPath, docFolder + "api.md")
            srcConfigPath = os.path.join(dirPath, docFolder + "configuration.md")
            changelogPath = os.path.join(dirPath, docFolder + "changelog.md")

            content = util.fileRead(changelogPath).replace("## ", "### ")
            content = content.replace("# "+changelog_title, "## "+changelog_title)
            util.fileInsertTail(dstReadmePath, "\n"+content.strip())

            content = util.fileRead(srcApiPath).replace("## ", "### ")
            content = content.replace("# API", "## API")
            util.fileInsertTail(dstReadmePath, "\n\n"+content.strip())

            content = util.fileRead(srcConfigPath).replace("## ", "### ")
            content = content.replace("# "+configuration_title, "## "+configuration_title)
            util.fileInsertTail(dstReadmePath, "\n\n"+content.strip())

            


def _copy_ui_docs(xchartsPath, websitePath, prefixPath, lang):
    srcPath = os.path.realpath(xchartsPath + "/../")
    dstPath = os.path.realpath("{0}/{1}".format(websitePath, prefixPath))
    docFolder = "Documentation~/{0}/".format(lang)
    readmeFileName = g_i18n_dict["readme_filename"][lang]
    ui_chart_title = g_i18n_dict["ui_chart_title"][lang]

    extraPath = os.path.join(dstPath, "ui")
    util.mkdir(extraPath)

    extraImgPath = os.path.join(extraPath, "img")
    util.mkdir(extraImgPath)

    categoryPath = os.path.join(extraPath, "_category_.json")
    util.fileWrite(categoryPath, "{0}\n\t\"label\": \"{1}\",\n\t\"position\": 70\n{2}".format("{", ui_chart_title, "}"))

    dirPath = os.path.join(srcPath, "XCharts-UI")
    if os.path.isdir(dirPath):
        chartname = "ui"
        filename = chartname+".md"

        srcReadmePath = os.path.join(dirPath, readmeFileName)
        if not os.path.exists(srcReadmePath):
            srcReadmePath = os.path.join(dirPath, "README.md")
        dstReadmePath = os.path.join(extraPath, filename)
        util.fileCopy(srcReadmePath, dstReadmePath)
        util.fileReplaceContent(dstReadmePath, docFolder, "")
        util.fileReplaceContent(dstReadmePath, "../img/", "img/")
        util.fileInsertHead(dstReadmePath, "---\nsidebar_position: 0\nslug: /{0}\n---\n\n".format(chartname))

        util.copyDir(os.path.join(dirPath, docFolder+"img"), extraImgPath)

        docPath = dirPath + "/" + docFolder
        for dirpath, dirnames, filenames in os.walk(docPath):
            for filename in filenames:
                if filename.endswith(".md") and filename.startswith("ui_"):
                    srcPath = os.path.join(dirpath, filename)
                    dstPath = os.path.join(extraPath, filename)
                    util.fileCopy(srcPath, dstPath)
                    util.fileReplaceContent(dstPath, "../img/", "img/")
                    print(dstPath)


def _copy_demo(websitePath, demoPath, version):
    if not os.path.exists(demoPath):
        print("demoPath not exists:", demoPath)
        return
    verionPath = websitePath+"/static/examples/"+version
    if not os.path.exists(verionPath):
        util.mkdir(verionPath)
        util.mkdir(verionPath+"/Build")
    util.copyDir(demoPath + "/Build", websitePath +"/static/examples/"+version+"/Build")


def sync_version(xchartsPath, websitePath, demoPath, version):
    if version == "master":
        prefixPath = "docs"
        print("sync_version", version)
        en_path = "docs"
        zh_path = "i18n/zh-Hans/docusaurus-plugin-content-docs/current"
        _copy_xcharts_docs(xchartsPath, websitePath, en_path, "en")
        _copy_xcharts_docs(xchartsPath, websitePath, zh_path, "zh")
        _copy_extra_docs(xchartsPath, websitePath, en_path, "en")
        _copy_extra_docs(xchartsPath, websitePath, zh_path, "zh")
        _copy_ui_docs(xchartsPath, websitePath, en_path, "en")
        _copy_ui_docs(xchartsPath, websitePath, zh_path, "zh")
        # _copy_demo(websitePath, demoPath, "master")
    else:
        prefixPath = "versioned_docs/version-{0}".format(version)
        srcPath = websitePath + "/docs"
        dstPath = websitePath + "/" + prefixPath
        util.copyDir(srcPath, dstPath)

        # cp ./versioned_sidebars/default.json ./versioned_sidebars/version-$version-sidebars.json
        srcPath = websitePath + "/versioned_sidebars/default.json"
        dstPath = websitePath + "/versioned_sidebars/version-{0}-sidebars.json".format(version)
        util.fileCopy(srcPath, dstPath)

        srcPath = websitePath + "/src/pages/api/master"
        dstPath = websitePath + "/src/pages/api/{0}".format(version)
        util.copyDir(srcPath, dstPath)

        _copy_demo(websitePath, demoPath, version)

if __name__ == "__main__":
    xchartsPath = os.path.realpath(sys.argv[1].replace("\\", "/"))
    websitePath = os.path.realpath(sys.argv[2].replace("\\", "/"))
    demoPath = os.path.realpath(sys.argv[3].replace("\\", "/"))
    version = sys.argv[4]
    print("xchartsPath", xchartsPath)
    print("websitePath", websitePath)
    print("demoPath", demoPath)
    print("version", version)
    sync_version(xchartsPath, websitePath, demoPath, version)
