import {request} from './base'

export function getUserToken(){
  return request({
    url : '/home/multidata'
  })
}