import React, { FunctionComponent } from 'react';
import { BusinessRegisterationForm } from '../../shared/interfaces/BusinessRegisterationForm';

type Props = { data: BusinessRegisterationForm | undefined };

const PreviewNewBusinessContainer: FunctionComponent<Props> = ({ data }) => <div>{data?.name}</div>;

export default PreviewNewBusinessContainer;
