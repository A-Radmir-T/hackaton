import './styles.css'
import {ContextMenu} from "@/menu";
import {BackgroundModule} from "@/modules/background.module";
import { CustomMessage } from './modules/customMessage.module';
import {ClickCounter} from "@/modules/clickCounter.module";

const modules = [BackgroundModule, ClickCounter, CustomMessage]

const contextMenu = new ContextMenu('#menu', modules)

contextMenu.init()
