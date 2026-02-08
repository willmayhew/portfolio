import { NgxTimelineEvent } from "@frxjs/ngx-timeline";

export interface TimeLineEventExtra extends NgxTimelineEvent{
    id?: string;
    role: string;
}
