import { $ } from '@wdio/globals'
import Page from './base.page';

class SecurePage extends Page {

    public get flashAlert () {
        return $('#flash');
    }
}

export default new SecurePage();
