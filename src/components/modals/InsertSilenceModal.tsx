import * as React from "react";
import { Modal, Button, DropdownItemProps, Dropdown, DropdownProps, Form } from "semantic-ui-react";
import TimeInputUI from "../editors/audio/TimeInput";
import AudioEditor from "../../core/audio/AudioEditor";
import { AudioUnitOptions, TAudioUnit } from "../../core/types";
import I18n from "../../i18n/I18n";
import type Env from "../../core/Env";
import type { EnvEventMap } from "../../core/Env";
import "./InsertSilenceModal.scss";

interface Props {
    env: Env;
    editor: AudioEditor;
    lang: string;
    open: boolean;
    onClose: () => any;
}
interface State {
    audioUnit: TAudioUnit;
    audioUnitOptions: AudioUnitOptions;
    samples: number;
}

export default class InsertSilenceModal extends React.PureComponent<Props, State> {
    state: State = {
        audioUnit: this.props.env.options.audioUnit,
        audioUnitOptions: this.props.env.options.audioUnitOptions,
        samples: this.props.editor.sampleRate || 48000
    };
    get strings() {
        return {
            ...I18n[this.props.lang].InsertSilenceModal,
            ...I18n[this.props.lang].UnitOptions
        };
    }
    get unitOptions(): DropdownItemProps[] {
        const unit = ["time", "sample", "measure"] as const;
        return unit.map(value => ({ key: value, text: this.strings[value], value }));
    }
    handleUnitChange = (e: React.SyntheticEvent<HTMLElement, Event>, { value }: DropdownProps) => this.setState({ audioUnit: value as TAudioUnit });
    handleTimeChange = (samples: number) => this.setState({ samples: Math.max(0, samples) });
    handleConfirm = () => {
        this.props.editor.insertSilence(this.state.samples);
        this.props.onClose();
    };
    handleOptions = ({ options: { audioUnitOptions } }: EnvEventMap["options"]) => this.setState({ audioUnitOptions });
    componentDidMount() {
        this.props.env.on("options", this.handleOptions);
    }
    componentWillUnmount() {
        this.props.env.off("options", this.handleOptions);
    }
    render() {
        return (
            <Modal className="modal-insert-silence" basic size="mini" open={this.props.open} onClose={this.props.onClose} closeIcon>
                <Modal.Header>{this.strings.title}</Modal.Header>
                <Modal.Content>
                    <Form inverted size="mini">
                        <Form.Field inline>
                            <label>{this.strings.msg}</label>
                            <TimeInputUI audioUnit={this.state.audioUnit} {...this.state.audioUnitOptions} samples={this.state.samples} sampleRate={this.props.editor.sampleRate} onChange={this.handleTimeChange} />
                            <Dropdown options={this.unitOptions} value={this.state.audioUnit} onChange={this.handleUnitChange} />
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button inverted color="grey" size="mini" onClick={this.props.onClose}>{this.strings.cancel}</Button>
                    <Button inverted color="green" size="mini" onClick={this.handleConfirm}>{this.strings.insert}</Button>
                </Modal.Actions>
            </Modal>
        );
    }
}
