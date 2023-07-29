import './styles.css'
import {ContextMenu} from "@/menu";
import {BackgroundModule} from "@/modules/background.module";
import { CustomMessage } from './modules/customMessage.module';
import {ClickCounter} from "@/modules/clickCounter.module";
import {ShapeModule} from "@/modules/shape.module";

const modules = [BackgroundModule, ClickCounter, CustomMessage, ShapeModule]

const contextMenu = new ContextMenu('#menu', modules)

contextMenu.init()

