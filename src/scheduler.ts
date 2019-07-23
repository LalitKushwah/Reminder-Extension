import * as vscode from 'vscode';
import { Utility } from './utility';
import { Remind } from './remind';

export class Scheduler {
    public constructor(private context: vscode.ExtensionContext) {
    }

    public start() {
        setInterval(() => {
            Remind.remind();
        }, 1000 * 60 * Utility.getConfiguration().get<number>('reminderIntervalInMinutes', 60));
    }
} 