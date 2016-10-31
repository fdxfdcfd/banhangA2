import { Injectable } from '@angular/core';
import { SlideBanner } from '../../model/slide_banner/slide_banner';
import { list_slide_banner } from '../../model/slide_banner/mock_slide_banner';

@Injectable()
export class SlideBannerService {

    constructor() { }
    
    getDanhSachSlideBannerPromise():Promise<SlideBanner[]>{
        return Promise.resolve(list_slide_banner);
    }
}