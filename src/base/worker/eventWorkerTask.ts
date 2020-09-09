import { EventData } from "../event/event";
import { WorkerTask } from "./workerTask";

/**
 * Format of task that handled by Event Workers
 */
export interface EventWorkerTask extends WorkerTask {
    /**
     * User project's id extracted from Integration Token
     */
    projectId: string;

    /**
     * Hawk Catcher name
     */
    catcherType: string;

    /**
     * All information about the event
     */
    payload: EventData;
}