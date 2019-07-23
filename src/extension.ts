import * as vscode from 'vscode';
import { Remind } from './remind';
import { Scheduler } from './scheduler';

export function activate(context: vscode.ExtensionContext) {
	let scheduler: Scheduler = new Scheduler(context);
	scheduler.start();
	
	let disposable = vscode.commands.registerCommand('takecare', () => {
		Remind.remind();
	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
