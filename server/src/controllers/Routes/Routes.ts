import Axios, { AxiosResponse } from 'axios';

export default class Routes {
  async getRoutes(): Promise<any> {
    const response: AxiosResponse<any> = await Axios({
      baseURL: 'http://vuejs.local-dev.shopworks.nl/',
      method: 'get',
      url: '/api/v3/_info/openapi3.json',
    });
    return response;
  }
}

import {
  Controller,
  Get,
  Post,
  Response,
  Request,
  ContentType,
} from '@tsed/common';
import Shopworks from '../Shopworks/Functions';

const routes = new Routes();
const shopworks = new Shopworks();

interface IData {
  paths: any;
  data: any;
}

@Controller('/api')
export class ShopworksController {
  @Get('/routes')
  @ContentType('json')
  async getRoutes(request: Request, response: Response): Promise<any> {
    const data: IData = await routes.getRoutes();
    const apiRoutes: any = Object.keys(data.data.paths);

    console.log(data.data.paths[0]);
    return apiRoutes;
  }
  @Get('/token')
  @ContentType('json')
  async getToken(request: Request, response: Response): Promise<any> {
    const data = await shopworks.getOath();
    return data;
  }
}
