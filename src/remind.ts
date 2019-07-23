import * as vscode from 'vscode';
import { Utility } from './utility';

export class Remind {
    
    public static remind() {
        vscode.window.showInformationMessage(Utility.getConfiguration().get<string>("remindText", ""), {modal: true});
    }
}