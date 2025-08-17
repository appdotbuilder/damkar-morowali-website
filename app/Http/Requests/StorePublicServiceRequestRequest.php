<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePublicServiceRequestRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'type' => 'required|in:education,fire_protection,complaint',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'priority' => 'sometimes|in:low,medium,high,urgent',
            'requester_name' => 'required|string|max:255',
            'requester_email' => 'required|email|max:255',
            'requester_phone' => 'required|string|max:20',
            'requester_organization' => 'nullable|string|max:255',
            'requester_address' => 'required|string',
            'requested_date' => 'nullable|date|after:today',
            'requested_time' => 'nullable|date_format:H:i',
            'service_data' => 'nullable|array',
            'service_data.participants' => 'nullable|integer|min:1',
            'service_data.location' => 'nullable|string|max:255',
            'service_data.business_type' => 'nullable|string|max:255',
            'service_data.building_area' => 'nullable|numeric|min:0',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'type.required' => 'Jenis layanan harus dipilih.',
            'type.in' => 'Jenis layanan tidak valid.',
            'title.required' => 'Judul permohonan harus diisi.',
            'description.required' => 'Deskripsi permohonan harus diisi.',
            'requester_name.required' => 'Nama pemohon harus diisi.',
            'requester_email.required' => 'Email pemohon harus diisi.',
            'requester_email.email' => 'Format email tidak valid.',
            'requester_phone.required' => 'Nomor telepon harus diisi.',
            'requester_address.required' => 'Alamat pemohon harus diisi.',
            'requested_date.after' => 'Tanggal yang diminta harus setelah hari ini.',
            'service_data.participants.min' => 'Jumlah peserta minimal 1 orang.',
            'service_data.building_area.min' => 'Luas bangunan tidak boleh negatif.',
        ];
    }
}