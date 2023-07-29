import './styles.css'
import {ContextMenu} from "@/menu";
import {BackgroundModule} from "@/modules/background.module";
import { CustomMessage } from './modules/customMessage.module';
import {ClickCounter} from "@/modules/clickCounter.module";
import {CurrentLocation} from "@/modules/clickCounter.module";


const modules = [BackgroundModule, ClickCounter, CustomMessage, CurrentLocation]

const contextMenu = new ContextMenu('#menu', modules)

contextMenu.init()

