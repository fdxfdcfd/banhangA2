import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { SlideBannerService } from '../../services/service_slide_banner/service_slide_banner';
import { SlideBanner } from '../../model/slide_banner/slide_banner';

@Component({
    moduleId: module.id,
    selector: 'mod_banner',
    templateUrl: 'mod_banner.component.html',
    providers: [SlideBannerService],
    animations: [
        trigger("anSlideBanner", [
            state("left", style({
                "opacity": 0,
                "transform": "translateX(-30%)"
            })),
            state("inactive", style({
                "opacity": 1,
                "transform": "translateX(0)"
            })),
            state("right", style({
                "opacity": 0,
                "transform": "translateX(30%)"
            })),
            transition("right => inactive",animate("2000ms ease-in")),
            transition("inactive => left",animate("1500ms ease-out")),
            transition("left => right",animate("1000ms ease")),
            transition("left => inactive",animate("2000ms ease-in")),
            transition("inactive => right",animate("1500ms ease-out")),
            transition("right=> left",animate("1000ms ease")),
        ])
    ]
})
export class ModBannerComponent implements OnInit {
    list_slide_banner: SlideBanner[];
    slide_display = 0;

    constructor(private service: SlideBannerService) { 
        service.getDanhSachSlideBannerPromise().then(p => this.list_slide_banner = p);
    }

    ngOnInit() { }

    hien_thi_slide(){
        for(let i = 0; i < this.list_slide_banner.length; i++)
        {
            let last = this.list_slide_banner.length - 1;
            let now = this.slide_display;
            this.list_slide_banner[now].state = "inactive";
            
            if(now == 0)
            {
                this.list_slide_banner[last].state = "left";
                this.list_slide_banner[now+1].state = "right";                
            }
            else if (now == last) {
                this.list_slide_banner[now-1].state = "left";
                this.list_slide_banner[0].state = "right";                
            }
            else {
                this.list_slide_banner[now-1].state = "left";
                this.list_slide_banner[now+1].state = "right";                
            }
        }
        console.log(this.slide_display);
    }

    click_next(){
        if(this.slide_display >= this.list_slide_banner.length - 1)
        {
            this.slide_display = 0;
        }
        else
        {
            this.slide_display += 1;
        }
        this.hien_thi_slide();
    }

    click_prev(){
        if(this.slide_display <= 0)
        {
            this.slide_display = this.list_slide_banner.length - 1;
        }
        else
        {
            this.slide_display -= 1;
        }
        this.hien_thi_slide();
    }
}