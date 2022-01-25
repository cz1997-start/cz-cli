import downloadGit from 'download-git-repo'
import ora from 'ora'


export function downloadGitRepo(url,path='/'){
    return new Promise(function (res, rej) {
      const spinner = ora(`正在下载项目模板，源地址：${url}`)
      spinner.start();
      console.log('下载中----',url)
  
      downloadGit(url, path, { clone: true }, function (err) { // clone false 设置成false 具体设置看官网设置
        if (err) {
          spinner.fail()
          rej(err)
        }
        else {
          // 下载的模板存放在一个临时路径中，下载完成后，可以向下通知这个临时路径，以便后续处理
          spinner.succeed()
          res(url)
        }
      })
    })

}


