import os
import sys
import shutil


def mkdir(path):
    if not os.path.exists(path):
        os.makedirs(path)


def copyDir(src, dst):
    src = src.replace("\\", "/")
    dst = dst.replace("\\", "/")
    if not src.endswith("/"):
        src = src+"/"
    if not dst.endswith("/"):
        dst = dst+"/"
    mkdir(dst)
    for dirpath, dirnames, filenames in os.walk(src):
        dstFolder = dirpath.replace(src, dst)
        mkdir(dstFolder)
        for filename in filenames:
            srcPath = os.path.join(dirpath, filename)
            dstPath = srcPath.replace(src, dst)
            # print("srcPath", srcPath)
            # print("dstPath", dstPath)
            fileCopy(srcPath, dstPath)


def fileCopy(src, dst):
    shutil.copy(src, dst)


def fileWrite(filePath, content):
    with open(filePath, "w", encoding="UTF-8", errors="ignore") as f:
        f.write(content)


def fileInsertLine(filePath, matchStr, insertStr):
    with open(filePath, "r", encoding="UTF-8", errors="ignore") as f:
        lines = f.readlines()
    with open(filePath, "w", encoding="UTF-8", errors="ignore") as f:
        for line in lines:
            if matchStr in line:
                f.write(insertStr)
            f.write(line)


def fileInsertTail(filePath, insertStr):
    with open(filePath, "a", encoding="UTF-8", errors="ignore") as f:
        f.write(insertStr)


def fileInsertHead(filePath, insertStr):
    with open(filePath, "r", encoding="UTF-8", errors="ignore") as f:
        content = f.read()
    with open(filePath, "w", encoding="UTF-8", errors="ignore") as f:
        f.write(insertStr)
        f.write(content)


def fileRead(filePath):
    content = ""
    with open(filePath, "r", encoding="UTF-8", errors="ignore") as f:
        content = f.read()
    return content


def fileReplaceContent(filePath, oldStr, newStr):
    with open(filePath, "r", encoding="UTF-8", errors="ignore") as f:
        content = f.read()
        content = content.replace(oldStr, newStr)
    with open(filePath, "w", encoding="UTF-8", errors="ignore") as f:
        f.write(content)


def fileFindLine(filePath, matchStr):
    with open(filePath, "r", encoding="UTF-8", errors="ignore") as f:
        for line in f.readlines():
            if matchStr in line:
                return line
