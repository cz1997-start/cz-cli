import config from './config'
import {downloadGitRepo} from './utils'
import {prompt} from 'inquirer'

export async function create(name,option){
  const {template}= await prompt(config.templateList)
  if(template)
  {
    downloadGitRepo(config.templateUrlMap[template],name)
  }
}